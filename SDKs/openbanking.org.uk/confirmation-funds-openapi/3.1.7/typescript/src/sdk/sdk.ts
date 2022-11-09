import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://openbanking.org.uk",
  "https://openbanking.org.uk/open-banking/v3.1/cbpii",
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
  
  // CreateFundsConfirmationConsents - Create Funds Confirmation Consent
  CreateFundsConfirmationConsents(
    req: operations.CreateFundsConfirmationConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFundsConfirmationConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFundsConfirmationConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/funds-confirmation-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateFundsConfirmationConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obFundsConfirmationConsentResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFundsConfirmations - Create Funds Confirmation
  CreateFundsConfirmations(
    req: operations.CreateFundsConfirmationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFundsConfirmationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFundsConfirmationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/funds-confirmations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateFundsConfirmationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obFundsConfirmationResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFundsConfirmationConsentsConsentId - Delete Funds Confirmation Consent
  DeleteFundsConfirmationConsentsConsentId(
    req: operations.DeleteFundsConfirmationConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFundsConfirmationConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFundsConfirmationConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/funds-confirmation-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFundsConfirmationConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFundsConfirmationConsentsConsentId - Get Funds Confirmation Consent
  GetFundsConfirmationConsentsConsentId(
    req: operations.GetFundsConfirmationConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFundsConfirmationConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFundsConfirmationConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/funds-confirmation-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFundsConfirmationConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obFundsConfirmationConsentResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
