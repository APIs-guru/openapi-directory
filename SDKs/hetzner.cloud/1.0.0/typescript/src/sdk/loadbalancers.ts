import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class LoadBalancers {
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
   * deleteLoadBalancersId - Delete a Load Balancer
   *
   * Deletes a Load Balancer.
  **/
  deleteLoadBalancersId(
    req: operations.DeleteLoadBalancersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLoadBalancersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLoadBalancersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLoadBalancersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLoadBalancers - Get all Load Balancers
   *
   * Gets all existing Load Balancers that you have available.
  **/
  getLoadBalancers(
    req: operations.GetLoadBalancersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/load_balancers";
    
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
        const res: operations.GetLoadBalancersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLoadBalancers200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLoadBalancersId - Get a Load Balancer
   *
   * Gets a specific Load Balancer object.
  **/
  getLoadBalancersId(
    req: operations.GetLoadBalancersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLoadBalancersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLoadBalancersId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLoadBalancersIdMetrics - Get Metrics for a LoadBalancer
   *
   * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
   * 
   * Depending on the type you will get different time series data:
   * 
   * |Type | Timeseries | Unit | Description |
   * |---- |------------|------|-------------|
   * | open_connections | open_connections | number | Open connections |
   * | connections_per_second | connections_per_second | connections/s | Connections per second |
   * | requests_per_second | requests_per_second | requests/s | Requests per second |
   * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
   * || bandwidth.out | bytes/s | Egress bandwidth |
   * 
   * Metrics are available for the last 30 days only.
   * 
   * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
   * 
   * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
   * 
  **/
  getLoadBalancersIdMetrics(
    req: operations.GetLoadBalancersIdMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancersIdMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancersIdMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/metrics", req.pathParams);
    
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
        const res: operations.GetLoadBalancersIdMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLoadBalancersIdMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancers - Create a Load Balancer
   *
   * Creates a Load Balancer.
   * 
   * #### Call specific error codes
   * 
   * | Code                                    | Description                                                                                           |
   * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
   * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
   * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
   * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
   * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
   * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
   * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
   * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
   * 
  **/
  postLoadBalancers(
    req: operations.PostLoadBalancersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/load_balancers";

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
        const res: operations.PostLoadBalancersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postLoadBalancers201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putLoadBalancersId - Update a Load Balancer
   *
   * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
   * 
   * Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
   * 
   * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
   * 
  **/
  putLoadBalancersId(
    req: operations.PutLoadBalancersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutLoadBalancersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutLoadBalancersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}", req.pathParams);

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
        const res: operations.PutLoadBalancersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putLoadBalancersId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
