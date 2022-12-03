import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Applications {
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
   * getApplicationsApplicationId - /applications/{application_id}
   *
   * ### Get an application
   * 
   * Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).
  **/
  getApplicationsApplicationId(
    req: operations.GetApplicationsApplicationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApplicationsApplicationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApplicationsApplicationIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/applications/{application_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetApplicationsApplicationIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getApplicationsApplicationId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postApplications - /applications
   *
   * ### Create an application
   * 
   * Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional. 
   * 
   * Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
  **/
  postApplications(
    req: operations.PostApplicationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApplicationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApplicationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/applications";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
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
        const res: operations.PostApplicationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postApplications200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putApplicationsApplicationId - /applications/{application_id}
   *
   * <h3>Update an application</h3>
   * 
   * Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.
   * 
   * Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
  **/
  putApplicationsApplicationId(
    req: operations.PutApplicationsApplicationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutApplicationsApplicationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutApplicationsApplicationIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/applications/{application_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
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
        const res: operations.PutApplicationsApplicationIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putApplicationsApplicationId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
