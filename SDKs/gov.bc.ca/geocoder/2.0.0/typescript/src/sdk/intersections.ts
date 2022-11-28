import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Intersections {
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
   * getAddressesOutputFormat - Geocode an address
   *
   * Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
  **/
  getAddressesOutputFormat(
    req: operations.GetAddressesOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressesOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressesOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/addresses.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetAddressesOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntersectionsIntersectionIdOutputFormat - Get an intersection by its unique ID
   *
   * Represents a individual intersection
  **/
  getIntersectionsIntersectionIdOutputFormat(
    req: operations.GetIntersectionsIntersectionIdOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntersectionsIntersectionIdOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntersectionsIntersectionIdOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intersections/{intersectionID}.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetIntersectionsIntersectionIdOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntersectionsNearOutputFormat - Find intersections near to a geographic point
   *
   * Represents intersections near a given point
  **/
  getIntersectionsNearOutputFormat(
    req: operations.GetIntersectionsNearOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntersectionsNearOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntersectionsNearOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intersections/near.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetIntersectionsNearOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntersectionsNearestOutputFormat - Find nearest intersection to a geographic point
   *
   * Represents the closest intersection to a given point
  **/
  getIntersectionsNearestOutputFormat(
    req: operations.GetIntersectionsNearestOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntersectionsNearestOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntersectionsNearestOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intersections/nearest.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetIntersectionsNearestOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntersectionsWithinOutputFormat - Find intersections in a geographic area
   *
   * Represents all intersections within a given area
  **/
  getIntersectionsWithinOutputFormat(
    req: operations.GetIntersectionsWithinOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntersectionsWithinOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntersectionsWithinOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intersections/within.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetIntersectionsWithinOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
