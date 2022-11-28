import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Licensees {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createLicensee - createLicensee
   *
   * Create a licensee for the specified API Key.
  **/
  createLicensee(
    req: operations.CreateLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateLicenseeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/licensees", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateLicenseeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseeResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteLicensee - deleteLicensee
   *
   * Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.
  **/
  deleteLicensee(
    req: operations.DeleteLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLicenseeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/licensees/{licensee_key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLicenseeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteLicenseeResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listLicensees - listLicensees
   *
   * Returns a list of licensees for a key.
  **/
  listLicensees(
    req: operations.ListLicenseesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListLicenseesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListLicenseesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/licensees", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListLicenseesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseeListResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * retrieveLicensee - retrieveLicensee
   *
   * Returns licensee information as identified by the licensee key.
  **/
  retrieveLicensee(
    req: operations.RetrieveLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveLicenseeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/licensees/{licensee_key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveLicenseeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseeResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateLicensee - updateLicensee
   *
   * Update particulars for a licensee
  **/
  updateLicensee(
    req: operations.UpdateLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLicenseeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/licensees", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateLicenseeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseeResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 402:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
