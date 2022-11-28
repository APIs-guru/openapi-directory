import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Substances {
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
   * getSubstanceByUuid - Get a substance
   *
   * Returns substance representation
  **/
  getSubstanceByUuid(
    req: operations.GetSubstanceByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance/{uuid}", req.pathParams);
    
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
        const res: operations.GetSubstanceByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.substance = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubstanceComposition - Substance composition
   *
   * Returns substance composition
  **/
  getSubstanceComposition(
    req: operations.GetSubstanceCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceCompositionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance/{uuid}/composition", req.pathParams);
    
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
        const res: operations.GetSubstanceCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.substanceComposition = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubstanceStructures - Get substance composition as a dataset
   *
   * Returns substance composition
  **/
  getSubstanceStructures(
    req: operations.GetSubstanceStructuresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceStructuresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceStructuresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance/{uuid}/structures", req.pathParams);
    
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
        const res: operations.GetSubstanceStructuresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dataset = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubstanceStudy - get substance study
   *
   * Returns substance study representation
  **/
  getSubstanceStudy(
    req: operations.GetSubstanceStudyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceStudyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceStudyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance/{uuid}/study", req.pathParams);
    
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
        const res: operations.GetSubstanceStudyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.substanceStudy = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubstanceStudySummary - Get study summary for the substance
   *
   * Study summary
  **/
  getSubstanceStudySummary(
    req: operations.GetSubstanceStudySummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceStudySummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceStudySummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance/{uuid}/studySummary", req.pathParams);
    
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
        const res: operations.GetSubstanceStudySummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.substanceStudySummary = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubstances - List substances
   *
   * Returns a list of substances, according to the search criteria
  **/
  getSubstances(
    req: operations.GetSubstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enm/{db}/substance", req.pathParams);
    
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
        const res: operations.GetSubstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.substance = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
