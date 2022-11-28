import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Route {
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
   * getOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time
  **/
  getOptimalRouteOutputFormat(
    req: operations.GetOptimalRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOptimalRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOptimalRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/optimalRoute.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOptimalRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
  **/
  getRouteOutputFormat(
    req: operations.GetRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/route.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTruckOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.
  **/
  getTruckOptimalRouteOutputFormat(
    req: operations.GetTruckOptimalRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruckOptimalRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTruckOptimalRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/optimalRoute.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetTruckOptimalRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.
  **/
  getTruckRouteOutputFormat(
    req: operations.GetTruckRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruckRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTruckRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/route.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetTruckRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
  **/
  postOptimalRouteOutputFormat(
    req: operations.PostOptimalRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOptimalRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOptimalRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/optimalRoute.{outputFormat}", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostOptimalRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
  **/
  postRouteOutputFormat(
    req: operations.PostRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/route.{outputFormat}", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postTruckOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
  **/
  postTruckOptimalRouteOutputFormat(
    req: operations.PostTruckOptimalRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruckOptimalRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruckOptimalRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/optimalRoute.{outputFormat}", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTruckOptimalRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
   *
   * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
  **/
  postTruckRouteOutputFormat(
    req: operations.PostTruckRouteOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruckRouteOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruckRouteOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/route.{outputFormat}", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTruckRouteOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
