import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Prime {
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
   * getNumbersPrimeFactors - Get the prime factors of a given number.
  **/
  getNumbersPrimeFactors(
    req: operations.GetNumbersPrimeFactorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeFactorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeFactorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/factors";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeFactorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsFermatPrime - Checks whether a given number is a known fermat prime number or not.
  **/
  getNumbersPrimeIsFermatPrime(
    req: operations.GetNumbersPrimeIsFermatPrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsFermatPrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsFermatPrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-fermat-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsFermatPrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsFibonacciPrime - Checks whether a given number is a known fibonacci prime number or not.
  **/
  getNumbersPrimeIsFibonacciPrime(
    req: operations.GetNumbersPrimeIsFibonacciPrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsFibonacciPrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsFibonacciPrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-fibonacci-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsFibonacciPrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsMersennePrime - Checks whether a given number is a known mersenne prime number or not.
  **/
  getNumbersPrimeIsMersennePrime(
    req: operations.GetNumbersPrimeIsMersennePrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsMersennePrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsMersennePrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-mersenne-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsMersennePrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsPartitionPrime - Checks whether a given number is a known partition prime number or not.
  **/
  getNumbersPrimeIsPartitionPrime(
    req: operations.GetNumbersPrimeIsPartitionPrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsPartitionPrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsPartitionPrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-partition-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsPartitionPrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsPellPrime - Checks whether a given number is a known pell prime number or not.
  **/
  getNumbersPrimeIsPellPrime(
    req: operations.GetNumbersPrimeIsPellPrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsPellPrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsPellPrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-pell-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsPellPrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsPerfect - Checks whether a given number is a perfect number or not.
  **/
  getNumbersPrimeIsPerfect(
    req: operations.GetNumbersPrimeIsPerfectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsPerfectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsPerfectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-perfect";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsPerfectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumbersPrimeIsPrime - Checks whether a given number is a known prime number or not.
  **/
  getNumbersPrimeIsPrime(
    req: operations.GetNumbersPrimeIsPrimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumbersPrimeIsPrimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumbersPrimeIsPrimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/numbers/prime/is-prime";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetNumbersPrimeIsPrimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
