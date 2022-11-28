import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
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
   * firebaseProjectsAddFirebase - Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
  **/
  firebaseProjectsAddFirebase(
    req: operations.FirebaseProjectsAddFirebaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAddFirebaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAddFirebaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{project}:addFirebase", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsAddFirebaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAddGoogleAnalytics - Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
  **/
  firebaseProjectsAddGoogleAnalytics(
    req: operations.FirebaseProjectsAddGoogleAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAddGoogleAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAddGoogleAnalyticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}:addGoogleAnalytics", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsAddGoogleAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAndroidAppsCreate - Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
  **/
  firebaseProjectsAndroidAppsCreate(
    req: operations.FirebaseProjectsAndroidAppsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAndroidAppsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAndroidAppsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/androidApps", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsAndroidAppsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAndroidAppsList - Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
  **/
  firebaseProjectsAndroidAppsList(
    req: operations.FirebaseProjectsAndroidAppsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAndroidAppsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAndroidAppsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/androidApps", req.pathParams);
    
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
        const res: operations.FirebaseProjectsAndroidAppsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAndroidAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAndroidAppsShaCreate - Adds a ShaCertificate to the specified AndroidApp.
  **/
  firebaseProjectsAndroidAppsShaCreate(
    req: operations.FirebaseProjectsAndroidAppsShaCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAndroidAppsShaCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAndroidAppsShaCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/sha", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsAndroidAppsShaCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.shaCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAndroidAppsShaDelete - Removes a ShaCertificate from the specified AndroidApp.
  **/
  firebaseProjectsAndroidAppsShaDelete(
    req: operations.FirebaseProjectsAndroidAppsShaDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAndroidAppsShaDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAndroidAppsShaDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsAndroidAppsShaDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAndroidAppsShaList - Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
  **/
  firebaseProjectsAndroidAppsShaList(
    req: operations.FirebaseProjectsAndroidAppsShaListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAndroidAppsShaListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAndroidAppsShaListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/sha", req.pathParams);
    
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
        const res: operations.FirebaseProjectsAndroidAppsShaListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listShaCertificatesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsAvailableLocationsList - Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
  **/
  firebaseProjectsAvailableLocationsList(
    req: operations.FirebaseProjectsAvailableLocationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsAvailableLocationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsAvailableLocationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/availableLocations", req.pathParams);
    
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
        const res: operations.FirebaseProjectsAvailableLocationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailableLocationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsDefaultLocationFinalize - Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
  **/
  firebaseProjectsDefaultLocationFinalize(
    req: operations.FirebaseProjectsDefaultLocationFinalizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsDefaultLocationFinalizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsDefaultLocationFinalizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/defaultLocation:finalize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsDefaultLocationFinalizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsIosAppsCreate - Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
  **/
  firebaseProjectsIosAppsCreate(
    req: operations.FirebaseProjectsIosAppsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsIosAppsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsIosAppsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/iosApps", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsIosAppsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsIosAppsList - Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
  **/
  firebaseProjectsIosAppsList(
    req: operations.FirebaseProjectsIosAppsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsIosAppsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsIosAppsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/iosApps", req.pathParams);
    
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
        const res: operations.FirebaseProjectsIosAppsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listIosAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsList - Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
  **/
  firebaseProjectsList(
    req: operations.FirebaseProjectsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/projects";
    
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
        const res: operations.FirebaseProjectsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFirebaseProjectsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsRemoveAnalytics - Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
  **/
  firebaseProjectsRemoveAnalytics(
    req: operations.FirebaseProjectsRemoveAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsRemoveAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsRemoveAnalyticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}:removeAnalytics", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsRemoveAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsSearchApps - Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
  **/
  firebaseProjectsSearchApps(
    req: operations.FirebaseProjectsSearchAppsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsSearchAppsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsSearchAppsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}:searchApps", req.pathParams);
    
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
        const res: operations.FirebaseProjectsSearchAppsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchFirebaseAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsCreate - Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
  **/
  firebaseProjectsWebAppsCreate(
    req: operations.FirebaseProjectsWebAppsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/webApps", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsWebAppsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsGetConfig - Gets the configuration artifact associated with the specified WebApp.
  **/
  firebaseProjectsWebAppsGetConfig(
    req: operations.FirebaseProjectsWebAppsGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
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
        const res: operations.FirebaseProjectsWebAppsGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webAppConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsList - Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
  **/
  firebaseProjectsWebAppsList(
    req: operations.FirebaseProjectsWebAppsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/webApps", req.pathParams);
    
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
        const res: operations.FirebaseProjectsWebAppsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWebAppsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsPatch - Updates the attributes of the specified WebApp.
  **/
  firebaseProjectsWebAppsPatch(
    req: operations.FirebaseProjectsWebAppsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsWebAppsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webApp = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsRemove - Removes the specified WebApp from the FirebaseProject.
  **/
  firebaseProjectsWebAppsRemove(
    req: operations.FirebaseProjectsWebAppsRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:remove", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsWebAppsRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseProjectsWebAppsUndelete - Restores the specified WebApp to the FirebaseProject.
  **/
  firebaseProjectsWebAppsUndelete(
    req: operations.FirebaseProjectsWebAppsUndeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseProjectsWebAppsUndeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseProjectsWebAppsUndeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:undelete", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirebaseProjectsWebAppsUndeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
