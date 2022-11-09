import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.nexmo.com/verify",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://developer.nexmo.com/verify - More information on the Verify product on our Developer Portal
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // NetworkUnblock - Request a network unblock
  /** 
   * Request to unblock a network that has been blocked due to potential fraud detection
   * <div class="Vlt-callout Vlt-callout--critical">
   *   <div class="Vlt-callout__content">
   *     <h4>Network Unblock is switched off by default.</h4>
   *     Please contact Sales to enable the Network Unblock API for your account.
   *   </div>
   * </div>
  **/
  NetworkUnblock(
    req: operations.NetworkUnblockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NetworkUnblockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NetworkUnblockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/network-unblock";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NetworkUnblockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.networkUnblockResponseOk = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.networkUnblockResponseForbidden = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.networkUnblockResponseNotFound = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.networkUnblock422ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorThrottled = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VerifyCheck - Verify Check
  /** 
   * Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
   * 
   * 1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
   * 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
   * 
   * *Note that this endpoint is available by `GET` request as well as `POST`.*
  **/
  VerifyCheck(
    req: operations.VerifyCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyCheckRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/check/{format}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VerifyCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyCheck200ApplicationJsonOneOf = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VerifyControl - Verify Control
  /** 
   * Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
   * 
   * 
   * 1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
   * 
   * 2. Check the `status` in the response.
   * 
   * 
   * *Note that this endpoint is available by `GET` request as well as `POST`.*
  **/
  VerifyControl(
    req: operations.VerifyControlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyControlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyControlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/control/{format}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VerifyControlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyControl200ApplicationJsonOneOf = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VerifyRequest - Request a Verification
  /** 
   * Use Verify request to generate and send a PIN to your user:
   * 
   * 1. Create a request to send a verification code to your user.
   * 
   * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
   * 
   * 3. Use the `request_id` field in the response for the Verify check.
   * 
   * *Note that this endpoint is available by `GET` request as well as `POST`.*
  **/
  VerifyRequest(
    req: operations.VerifyRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{format}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VerifyRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyRequest200ApplicationJsonOneOf = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VerifyRequestWithPsd2 - PSD2 (Payment Services Directive 2) Request
  /** 
   * Use Verify request to generate and send a PIN to your user to authorize a payment:
   * 1. Create a request to send a verification code to your user.
   * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
   * 3. Use the `request_id` field in the response for the Verify check.
   * (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
  **/
  VerifyRequestWithPsd2(
    req: operations.VerifyRequestWithPsd2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyRequestWithPsd2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyRequestWithPsd2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/psd2/{format}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VerifyRequestWithPsd2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyRequestWithPsd2200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VerifySearch - Verify Search
  /** 
   * Use Verify search to check the status of past or current verification requests:
   * 
   * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
   * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
   * 
   * *Note that this endpoint is available by `POST` request as well as `GET`.*
  **/
  VerifySearch(
    req: operations.VerifySearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifySearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifySearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VerifySearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifySearch200ApplicationJsonOneOf = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
