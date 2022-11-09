import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://cloudidentity.googleapis.com/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://cloud.google.com/identity/
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CloudidentityCustomersUserinvitationsCancel - Cancels a UserInvitation that was already sent.
  CloudidentityCustomersUserinvitationsCancel(
    req: operations.CloudidentityCustomersUserinvitationsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityCustomersUserinvitationsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityCustomersUserinvitationsCancelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:cancel", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityCustomersUserinvitationsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityCustomersUserinvitationsIsInvitableUser - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
  CloudidentityCustomersUserinvitationsIsInvitableUser(
    req: operations.CloudidentityCustomersUserinvitationsIsInvitableUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityCustomersUserinvitationsIsInvitableUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityCustomersUserinvitationsIsInvitableUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:isInvitableUser", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityCustomersUserinvitationsIsInvitableUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.isInvitableUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityCustomersUserinvitationsList - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
  CloudidentityCustomersUserinvitationsList(
    req: operations.CloudidentityCustomersUserinvitationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityCustomersUserinvitationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityCustomersUserinvitationsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/userinvitations", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityCustomersUserinvitationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUserInvitationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityCustomersUserinvitationsSend - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.
  CloudidentityCustomersUserinvitationsSend(
    req: operations.CloudidentityCustomersUserinvitationsSendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityCustomersUserinvitationsSendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityCustomersUserinvitationsSendRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:send", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityCustomersUserinvitationsSendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesCreate - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
  CloudidentityDevicesCreate(
    req: operations.CloudidentityDevicesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/devices";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersApprove - Approves device to access user data.
  CloudidentityDevicesDeviceUsersApprove(
    req: operations.CloudidentityDevicesDeviceUsersApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersApproveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:approve", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersBlock - Blocks device from accessing user data
  CloudidentityDevicesDeviceUsersBlock(
    req: operations.CloudidentityDevicesDeviceUsersBlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersBlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersBlockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:block", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersBlockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersCancelWipe - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
  CloudidentityDevicesDeviceUsersCancelWipe(
    req: operations.CloudidentityDevicesDeviceUsersCancelWipeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersCancelWipeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersCancelWipeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:cancelWipe", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersCancelWipeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersList - Lists/Searches DeviceUsers.
  CloudidentityDevicesDeviceUsersList(
    req: operations.CloudidentityDevicesDeviceUsersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/deviceUsers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeviceUsersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersLookup - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
  CloudidentityDevicesDeviceUsersLookup(
    req: operations.CloudidentityDevicesDeviceUsersLookupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersLookupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersLookupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}:lookup", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersLookupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lookupSelfDeviceUsersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesDeviceUsersWipe - Wipes the user's account on a device.
  CloudidentityDevicesDeviceUsersWipe(
    req: operations.CloudidentityDevicesDeviceUsersWipeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesDeviceUsersWipeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesDeviceUsersWipeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:wipe", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesDeviceUsersWipeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityDevicesList - Lists/Searches devices.
  CloudidentityDevicesList(
    req: operations.CloudidentityDevicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityDevicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityDevicesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/devices";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityDevicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsCreate - Creates a `Group`.
  CloudidentityGroupsCreate(
    req: operations.CloudidentityGroupsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/groups";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsList - Lists the `Group` resources under a customer or namespace.
  CloudidentityGroupsList(
    req: operations.CloudidentityGroupsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/groups";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listGroupsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsLookup - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
  CloudidentityGroupsLookup(
    req: operations.CloudidentityGroupsLookupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsLookupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsLookupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/groups:lookup";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsLookupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lookupGroupNameResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsCheckTransitiveMembership - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
  CloudidentityGroupsMembershipsCheckTransitiveMembership(
    req: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships:checkTransitiveMembership", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.checkTransitiveMembershipResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsCreate - Creates a `Membership`.
  CloudidentityGroupsMembershipsCreate(
    req: operations.CloudidentityGroupsMembershipsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsGetMembershipGraph - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
  CloudidentityGroupsMembershipsGetMembershipGraph(
    req: operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships:getMembershipGraph", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsLookup - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
  CloudidentityGroupsMembershipsLookup(
    req: operations.CloudidentityGroupsMembershipsLookupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsLookupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsLookupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships:lookup", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsLookupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lookupMembershipNameResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsModifyMembershipRoles - Modifies the `MembershipRole`s of a `Membership`.
  CloudidentityGroupsMembershipsModifyMembershipRoles(
    req: operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:modifyMembershipRoles", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.modifyMembershipRolesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsSearchTransitiveGroups - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
  CloudidentityGroupsMembershipsSearchTransitiveGroups(
    req: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships:searchTransitiveGroups", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchTransitiveGroupsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsMembershipsSearchTransitiveMemberships - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
  CloudidentityGroupsMembershipsSearchTransitiveMemberships(
    req: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships:searchTransitiveMemberships", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchTransitiveMembershipsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityGroupsSearch - Searches for `Group` resources matching a specified query.
  CloudidentityGroupsSearch(
    req: operations.CloudidentityGroupsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityGroupsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityGroupsSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/groups:search";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityGroupsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchGroupsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSamlSsoProfilesCreate - Creates an InboundSamlSsoProfile for a customer.
  CloudidentityInboundSamlSsoProfilesCreate(
    req: operations.CloudidentityInboundSamlSsoProfilesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSamlSsoProfilesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSamlSsoProfilesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/inboundSamlSsoProfiles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSamlSsoProfilesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd - Adds an IdpCredential. Up to 2 credentials are allowed.
  CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(
    req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/idpCredentials:add", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSamlSsoProfilesIdpCredentialsList - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
  CloudidentityInboundSamlSsoProfilesIdpCredentialsList(
    req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/idpCredentials", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIdpCredentialsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSamlSsoProfilesList - Lists InboundSamlSsoProfiles for a customer.
  CloudidentityInboundSamlSsoProfilesList(
    req: operations.CloudidentityInboundSamlSsoProfilesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSamlSsoProfilesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSamlSsoProfilesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/inboundSamlSsoProfiles";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSamlSsoProfilesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInboundSamlSsoProfilesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSsoAssignmentsCreate - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
  CloudidentityInboundSsoAssignmentsCreate(
    req: operations.CloudidentityInboundSsoAssignmentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSsoAssignmentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSsoAssignmentsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/inboundSsoAssignments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSsoAssignmentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSsoAssignmentsDelete - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
  CloudidentityInboundSsoAssignmentsDelete(
    req: operations.CloudidentityInboundSsoAssignmentsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSsoAssignmentsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSsoAssignmentsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSsoAssignmentsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSsoAssignmentsGet - Gets an InboundSsoAssignment.
  CloudidentityInboundSsoAssignmentsGet(
    req: operations.CloudidentityInboundSsoAssignmentsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSsoAssignmentsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSsoAssignmentsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSsoAssignmentsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.inboundSsoAssignment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSsoAssignmentsList - Lists the InboundSsoAssignments for a `Customer`.
  CloudidentityInboundSsoAssignmentsList(
    req: operations.CloudidentityInboundSsoAssignmentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSsoAssignmentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSsoAssignmentsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/inboundSsoAssignments";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSsoAssignmentsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInboundSsoAssignmentsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityInboundSsoAssignmentsPatch - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.
  CloudidentityInboundSsoAssignmentsPatch(
    req: operations.CloudidentityInboundSsoAssignmentsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityInboundSsoAssignmentsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityInboundSsoAssignmentsPatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityInboundSsoAssignmentsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityOrgUnitsMembershipsList - List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)
  CloudidentityOrgUnitsMembershipsList(
    req: operations.CloudidentityOrgUnitsMembershipsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityOrgUnitsMembershipsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityOrgUnitsMembershipsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/memberships", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityOrgUnitsMembershipsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listOrgMembershipsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloudidentityOrgUnitsMembershipsMove - Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.
  CloudidentityOrgUnitsMembershipsMove(
    req: operations.CloudidentityOrgUnitsMembershipsMoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudidentityOrgUnitsMembershipsMoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudidentityOrgUnitsMembershipsMoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:move", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloudidentityOrgUnitsMembershipsMoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
