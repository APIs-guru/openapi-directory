import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ServerActions {
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
   * getServersIdActions - Get all Actions for a Server
   *
   * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
  **/
  getServersIdActions(
    req: operations.GetServersIdActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetServersIdActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetServersIdActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions", req.pathParams);
    
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
        const res: operations.GetServersIdActionsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getServersIdActionsActionId - Get an Action for a Server
   *
   * Returns a specific Action object for a Server.
  **/
  getServersIdActionsActionId(
    req: operations.GetServersIdActionsActionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetServersIdActionsActionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetServersIdActionsActionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetServersIdActionsActionIdResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsAddToPlacementGroup - Add a Server to a Placement Group
   *
   * Adds a Server to a Placement Group.
   * 
   * Server must be powered off for this command to succeed.
   * 
   * #### Call specific error codes
   * 
   * | Code                          | Description                                                          |
   * |-------------------------------|----------------------------------------------------------------------|
   * | `server_not_stopped`          | The action requires a stopped server                                 |
   * 
  **/
  postServersIdActionsAddToPlacementGroup(
    req: operations.PostServersIdActionsAddToPlacementGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsAddToPlacementGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsAddToPlacementGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/add_to_placement_group", req.pathParams);

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
        const res: operations.PostServersIdActionsAddToPlacementGroupResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsAttachIso - Attach an ISO to a Server
   *
   * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
   * 
   * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
   * 
  **/
  postServersIdActionsAttachIso(
    req: operations.PostServersIdActionsAttachIsoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsAttachIsoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsAttachIsoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/attach_iso", req.pathParams);

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
        const res: operations.PostServersIdActionsAttachIsoResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsAttachToNetwork - Attach a Server to a Network
   *
   * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
   * 
   * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
   * 
   * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
   * 
   * **Call specific error codes**
   * 
   * | Code                             | Description                                                           |
   * |----------------------------------|-----------------------------------------------------------------------|
   * | `server_already_attached`        | The server is already attached to the network                         |
   * | `ip_not_available`               | The provided Network IP is not available                              |
   * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
   * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
   * 
  **/
  postServersIdActionsAttachToNetwork(
    req: operations.PostServersIdActionsAttachToNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsAttachToNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsAttachToNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/attach_to_network", req.pathParams);

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
        const res: operations.PostServersIdActionsAttachToNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsChangeAliasIps - Change alias IPs of a Network
   *
   * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
  **/
  postServersIdActionsChangeAliasIps(
    req: operations.PostServersIdActionsChangeAliasIpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsChangeAliasIpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsChangeAliasIpsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/change_alias_ips", req.pathParams);

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
        const res: operations.PostServersIdActionsChangeAliasIpsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsChangeDnsPtr - Change reverse DNS entry for this Server
   *
   * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
   * 
   * Floating IPs assigned to the Server are not affected by this.
   * 
  **/
  postServersIdActionsChangeDnsPtr(
    req: operations.PostServersIdActionsChangeDnsPtrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsChangeDnsPtrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsChangeDnsPtrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/change_dns_ptr", req.pathParams);

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
        const res: operations.PostServersIdActionsChangeDnsPtrResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsChangeProtection - Change Server Protection
   *
   * Changes the protection configuration of the Server.
  **/
  postServersIdActionsChangeProtection(
    req: operations.PostServersIdActionsChangeProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsChangeProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsChangeProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/change_protection", req.pathParams);

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
        const res: operations.PostServersIdActionsChangeProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsChangeType - Change the Type of a Server
   *
   * Changes the type (Cores, RAM and disk sizes) of a Server.
   * 
   * Server must be powered off for this command to succeed.
   * 
   * This copies the content of its disk, and starts it again.
   * 
   * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
   * 
   * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
   * 
   * #### Call specific error codes
   * 
   * | Code                          | Description                                                          |
   * |-------------------------------|----------------------------------------------------------------------|
   * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
   * | `server_not_stopped`          | The action requires a stopped server                                 |
   * 
  **/
  postServersIdActionsChangeType(
    req: operations.PostServersIdActionsChangeTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsChangeTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsChangeTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/change_type", req.pathParams);

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
        const res: operations.PostServersIdActionsChangeTypeResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsCreateImage - Create Image from a Server
   *
   * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
   * 
   * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
   * 
   * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
   * 
  **/
  postServersIdActionsCreateImage(
    req: operations.PostServersIdActionsCreateImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsCreateImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsCreateImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/create_image", req.pathParams);

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
        const res: operations.PostServersIdActionsCreateImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postServersIdActionsCreateImage201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postServersIdActionsDetachFromNetwork - Detach a Server from a Network
   *
   * Detaches a Server from a network. The interface for this network will vanish.
  **/
  postServersIdActionsDetachFromNetwork(
    req: operations.PostServersIdActionsDetachFromNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsDetachFromNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsDetachFromNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/detach_from_network", req.pathParams);

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
        const res: operations.PostServersIdActionsDetachFromNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsDetachIso - Detach an ISO from a Server
   *
   * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
  **/
  postServersIdActionsDetachIso(
    req: operations.PostServersIdActionsDetachIsoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsDetachIsoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsDetachIsoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/detach_iso", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsDetachIsoResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsDisableBackup - Disable Backups for a Server
   *
   * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
   * 
   * Caution: This immediately removes all existing backups for the Server!
   * 
  **/
  postServersIdActionsDisableBackup(
    req: operations.PostServersIdActionsDisableBackupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsDisableBackupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsDisableBackupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/disable_backup", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsDisableBackupResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsDisableRescue - Disable Rescue Mode for a Server
   *
   * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
   * 
   * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
   * 
   * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
   * 
  **/
  postServersIdActionsDisableRescue(
    req: operations.PostServersIdActionsDisableRescueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsDisableRescueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsDisableRescueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/disable_rescue", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsDisableRescueResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsEnableBackup - Enable and Configure Backups for a Server
   *
   * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
   * 
   * Backups are automatically created daily.
   * 
  **/
  postServersIdActionsEnableBackup(
    req: operations.PostServersIdActionsEnableBackupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsEnableBackupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsEnableBackupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/enable_backup", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsEnableBackupResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsEnableRescue - Enable Rescue Mode for a Server
   *
   * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
   * 
   * In case a Server cannot boot on its own you can use this to access a Server’s disks.
   * 
   * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
   * 
   * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
   * 
  **/
  postServersIdActionsEnableRescue(
    req: operations.PostServersIdActionsEnableRescueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsEnableRescueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsEnableRescueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/enable_rescue", req.pathParams);

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
        const res: operations.PostServersIdActionsEnableRescueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postServersIdActionsEnableRescue201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postServersIdActionsPoweroff - Power off a Server
   *
   * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
  **/
  postServersIdActionsPoweroff(
    req: operations.PostServersIdActionsPoweroffRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsPoweroffResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsPoweroffRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/poweroff", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsPoweroffResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsPoweron - Power on a Server
   *
   * Starts a Server by turning its power on.
  **/
  postServersIdActionsPoweron(
    req: operations.PostServersIdActionsPoweronRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsPoweronResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsPoweronRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/poweron", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsPoweronResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsReboot - Soft-reboot a Server
   *
   * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
  **/
  postServersIdActionsReboot(
    req: operations.PostServersIdActionsRebootRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsRebootResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsRebootRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/reboot", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsRebootResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsRebuild - Rebuild a Server from an Image
   *
   * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
   * 
   * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
   * 
   * Your Server will automatically be powered off before the rebuild command executes.
   * 
  **/
  postServersIdActionsRebuild(
    req: operations.PostServersIdActionsRebuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsRebuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsRebuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/rebuild", req.pathParams);

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
        const res: operations.PostServersIdActionsRebuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postServersIdActionsRebuild201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postServersIdActionsRemoveFromPlacementGroup - Remove from Placement Group
   *
   * Removes a Server from a Placement Group.
   * 
  **/
  postServersIdActionsRemoveFromPlacementGroup(
    req: operations.PostServersIdActionsRemoveFromPlacementGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsRemoveFromPlacementGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsRemoveFromPlacementGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/remove_from_placement_group", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsRemoveFromPlacementGroupResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsRequestConsole - Request Console for a Server
   *
   * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
  **/
  postServersIdActionsRequestConsole(
    req: operations.PostServersIdActionsRequestConsoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsRequestConsoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsRequestConsoleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/request_console", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsRequestConsoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postServersIdActionsRequestConsole201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postServersIdActionsReset - Reset a Server
   *
   * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
  **/
  postServersIdActionsReset(
    req: operations.PostServersIdActionsResetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsResetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/reset", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsResetResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postServersIdActionsResetPassword - Reset root Password of a Server
   *
   * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (state `on`) in order for this operation to succeed.
   * 
   * This will generate a new password for this Server and return it.
   * 
   * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
   * 
  **/
  postServersIdActionsResetPassword(
    req: operations.PostServersIdActionsResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsResetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/reset_password", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postServersIdActionsResetPassword201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postServersIdActionsShutdown - Shutdown a Server
   *
   * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.
  **/
  postServersIdActionsShutdown(
    req: operations.PostServersIdActionsShutdownRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostServersIdActionsShutdownResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostServersIdActionsShutdownRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/servers/{id}/actions/shutdown", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostServersIdActionsShutdownResponse = {statusCode: httpRes.status, contentType: contentType};
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
