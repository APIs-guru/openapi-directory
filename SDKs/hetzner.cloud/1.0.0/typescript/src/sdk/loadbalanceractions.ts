import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class LoadBalancerActions {
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
   * getLoadBalancersIdActions - Get all Actions for a Load Balancer
   *
   * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
  **/
  getLoadBalancersIdActions(
    req: operations.GetLoadBalancersIdActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancersIdActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancersIdActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions", req.pathParams);
    
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
        const res: operations.GetLoadBalancersIdActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLoadBalancersIdActionsActionId - Get an Action for a Load Balancer
   *
   * Returns a specific Action for a Load Balancer.
  **/
  getLoadBalancersIdActionsActionId(
    req: operations.GetLoadBalancersIdActionsActionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancersIdActionsActionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancersIdActionsActionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLoadBalancersIdActionsActionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsAddService - Add Service
   *
   * Adds a service to a Load Balancer.
   * 
   * #### Call specific error codes
   * 
   * | Code                       | Description                                             |
   * |----------------------------|---------------------------------------------------------|
   * | `source_port_already_used` | The source port you are trying to add is already in use |
   * 
  **/
  postLoadBalancersIdActionsAddService(
    req: operations.PostLoadBalancersIdActionsAddServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsAddServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsAddServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/add_service", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsAddServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsAddTarget - Add Target
   *
   * Adds a target to a Load Balancer.
   * 
   * #### Call specific error codes
   * 
   * | Code                                    | Description                                                                                           |
   * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
   * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
   * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
   * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
   * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
   * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
   * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
   * 
  **/
  postLoadBalancersIdActionsAddTarget(
    req: operations.PostLoadBalancersIdActionsAddTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsAddTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsAddTargetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/add_target", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsAddTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsAttachToNetwork - Attach a Load Balancer to a Network
   *
   * Attach a Load Balancer to a Network.
   * 
   * **Call specific error codes**
   * 
   * | Code                             | Description                                                           |
   * |----------------------------------|-----------------------------------------------------------------------|
   * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
   * | `ip_not_available`               | The provided Network IP is not available                              |
   * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
   * 
  **/
  postLoadBalancersIdActionsAttachToNetwork(
    req: operations.PostLoadBalancersIdActionsAttachToNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsAttachToNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsAttachToNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/attach_to_network", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsAttachToNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsChangeAlgorithm - Change Algorithm
   *
   * Change the algorithm that determines to which target new requests are sent.
  **/
  postLoadBalancersIdActionsChangeAlgorithm(
    req: operations.PostLoadBalancersIdActionsChangeAlgorithmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsChangeAlgorithmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsChangeAlgorithmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/change_algorithm", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsChangeAlgorithmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsChangeDnsPtr - Change reverse DNS entry for this Load Balancer
   *
   * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
   * 
   * Floating IPs assigned to the Server are not affected by this.
   * 
  **/
  postLoadBalancersIdActionsChangeDnsPtr(
    req: operations.PostLoadBalancersIdActionsChangeDnsPtrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsChangeDnsPtrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsChangeDnsPtrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/change_dns_ptr", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsChangeDnsPtrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsChangeProtection - Change Load Balancer Protection
   *
   * Changes the protection configuration of a Load Balancer.
  **/
  postLoadBalancersIdActionsChangeProtection(
    req: operations.PostLoadBalancersIdActionsChangeProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsChangeProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsChangeProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/change_protection", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsChangeProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsChangeType - Change the Type of a Load Balancer
   *
   * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
   * 
   * **Call specific error codes**
   * 
   * | Code                         | Description                                                     |
   * |------------------------------|-----------------------------------------------------------------|
   * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
   * 
  **/
  postLoadBalancersIdActionsChangeType(
    req: operations.PostLoadBalancersIdActionsChangeTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsChangeTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsChangeTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/change_type", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsChangeTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsDeleteService - Delete Service
   *
   * Delete a service of a Load Balancer.
  **/
  postLoadBalancersIdActionsDeleteService(
    req: operations.PostLoadBalancersIdActionsDeleteServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsDeleteServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsDeleteServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/delete_service", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsDeleteServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsDetachFromNetwork - Detach a Load Balancer from a Network
   *
   * Detaches a Load Balancer from a network.
  **/
  postLoadBalancersIdActionsDetachFromNetwork(
    req: operations.PostLoadBalancersIdActionsDetachFromNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsDetachFromNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsDetachFromNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/detach_from_network", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsDetachFromNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsDisablePublicInterface - Disable the public interface of a Load Balancer
   *
   * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
   * 
   * #### Call specific error codes
   * 
   * | Code                                      | Description                                                                    |
   * |-------------------------------------------|--------------------------------------------------------------------------------|
   * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
   * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
   * 
  **/
  postLoadBalancersIdActionsDisablePublicInterface(
    req: operations.PostLoadBalancersIdActionsDisablePublicInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsDisablePublicInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/disable_public_interface", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsEnablePublicInterface - Enable the public interface of a Load Balancer
   *
   * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
  **/
  postLoadBalancersIdActionsEnablePublicInterface(
    req: operations.PostLoadBalancersIdActionsEnablePublicInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsEnablePublicInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/enable_public_interface", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsRemoveTarget - Remove Target
   *
   * Removes a target from a Load Balancer.
  **/
  postLoadBalancersIdActionsRemoveTarget(
    req: operations.PostLoadBalancersIdActionsRemoveTargetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsRemoveTargetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsRemoveTargetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/remove_target", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsRemoveTargetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLoadBalancersIdActionsUpdateService - Update Service
   *
   * Updates a Load Balancer Service.
   * 
   * #### Call specific error codes
   * 
   * | Code                       | Description                                             |
   * |----------------------------|---------------------------------------------------------|
   * | `source_port_already_used` | The source port you are trying to add is already in use |
   * 
  **/
  postLoadBalancersIdActionsUpdateService(
    req: operations.PostLoadBalancersIdActionsUpdateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLoadBalancersIdActionsUpdateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLoadBalancersIdActionsUpdateServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/load_balancers/{id}/actions/update_service", req.pathParams);

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
        const res: operations.PostLoadBalancersIdActionsUpdateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
