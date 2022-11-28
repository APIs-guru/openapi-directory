import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Filter {
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
   * getAssociationFilter - Filter available associations
   *
   * More complex queries for associations scores and objects can be done using
   * this method, which allows to sort in different order, restrict to a specific class
   * of diseases or targets, as well as filtering results by score and associated pathways.
   * 
  **/
  getAssociationFilter(
    req: operations.GetAssociationFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAssociationFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAssociationFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/association/filter";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetAssociationFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEvidenceFilter - Filter available evidence
   *
   * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
   * Filters can be used to restrict the results by source and type of data,
   * or limit results to targets which are part of a particular pathway.
   * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
   * **Note** that multiple genes and diseases can be specified in the same request.
   * 
  **/
  getEvidenceFilter(
    req: operations.GetEvidenceFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEvidenceFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEvidenceFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence/filter";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetEvidenceFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssociationFilter - Batch query available associations
   *
   * Complex queries and filters for association objects can also be submitted using a JSON
   * object and the equivalent POST method.
   * 
  **/
  postAssociationFilter(
    req: operations.PostAssociationFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssociationFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssociationFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/association/filter";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostAssociationFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postEvidenceFilter - Batch filter available evidence
   *
   * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
   * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
   * 
  **/
  postEvidenceFilter(
    req: operations.PostEvidenceFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEvidenceFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEvidenceFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/platform/public/evidence/filter";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostEvidenceFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
