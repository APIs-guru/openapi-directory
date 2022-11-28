import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Occupants {
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
   * getOccupantsAddressesOutputFormat - Geocode an address and identify site occupants
   *
   * Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.
  **/
  getOccupantsAddressesOutputFormat(
    req: operations.GetOccupantsAddressesOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOccupantsAddressesOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOccupantsAddressesOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/occupants/addresses.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOccupantsAddressesOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOccupantsNearOutputFormat - Find occupants of sites near to a geographic point
   *
   * Represents occupants near a given point in order of closest to farthest
  **/
  getOccupantsNearOutputFormat(
    req: operations.GetOccupantsNearOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOccupantsNearOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOccupantsNearOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/occupants/near.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOccupantsNearOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOccupantsNearestOutputFormat - Find occupants of the site nearest to a geographic point
   *
   * Represents the closest occupant to a given point
  **/
  getOccupantsNearestOutputFormat(
    req: operations.GetOccupantsNearestOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOccupantsNearestOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOccupantsNearestOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/occupants/nearest.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOccupantsNearestOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOccupantsOccupantIdOutputFormat - Get an occupant (of a site) by its unique ID
   *
   * Represents an individual occupant
  **/
  getOccupantsOccupantIdOutputFormat(
    req: operations.GetOccupantsOccupantIdOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOccupantsOccupantIdOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOccupantsOccupantIdOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/occupants/{occupantID}.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOccupantsOccupantIdOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOccupantsWithinOutputFormat - Find occupants of sites in a geographic area
   *
   * Represents all occupants within a given area
  **/
  getOccupantsWithinOutputFormat(
    req: operations.GetOccupantsWithinOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOccupantsWithinOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOccupantsWithinOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/occupants/within.{outputFormat}", req.pathParams);
    
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
        const res: operations.GetOccupantsWithinOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
