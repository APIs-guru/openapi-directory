import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Directions {
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
   * getDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
  **/
  getDirectionsOutputFormat(
    req: operations.GetDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/directions.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time
  **/
  getOptimalDirectionsOutputFormat(
    req: operations.GetOptimalDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOptimalDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOptimalDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/optimalDirections.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOptimalDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTruckDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle
  **/
  getTruckDirectionsOutputFormat(
    req: operations.GetTruckDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruckDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTruckDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/directions.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetTruckDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTruckOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.
  **/
  getTruckOptimalDirectionsOutputFormat(
    req: operations.GetTruckOptimalDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruckOptimalDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTruckOptimalDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/optimalDirections.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetTruckOptimalDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
  **/
  postDirectionsOutputFormat(
    req: operations.PostDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/directions.{outputFormat}", req.pathParams);
    
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
        const res: operations.PostDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
  **/
  postOptimalDirectionsOutputFormat(
    req: operations.PostOptimalDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOptimalDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOptimalDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/optimalDirections.{outputFormat}", req.pathParams);
    
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
        const res: operations.PostOptimalDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postTruckDirectionsOutputFormat - Get the directions, path, distance and travel time between a series of geographic points
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
  **/
  postTruckDirectionsOutputFormat(
    req: operations.PostTruckDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruckDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruckDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/directions.{outputFormat}", req.pathParams);
    
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
        const res: operations.PostTruckDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postTruckOptimalDirectionsOutputFormat - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
   *
   * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
  **/
  postTruckOptimalDirectionsOutputFormat(
    req: operations.PostTruckOptimalDirectionsOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruckOptimalDirectionsOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruckOptimalDirectionsOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/truck/optimalDirections.{outputFormat}", req.pathParams);
    
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
        const res: operations.PostTruckOptimalDirectionsOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
