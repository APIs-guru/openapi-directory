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
   * firebaseappcheckProjectsAppsAppAttestConfigBatchGet - Atomically gets the AppAttestConfigs for the specified list of apps.
  **/
  firebaseappcheckProjectsAppsAppAttestConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/appAttestConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsDebugTokensCreate - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
  **/
  firebaseappcheckProjectsAppsDebugTokensCreate(
    req: operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/debugTokens", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaDebugToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsDebugTokensDelete - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
  **/
  firebaseappcheckProjectsAppsDebugTokensDelete(
    req: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleProtobufEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsDebugTokensList - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
  **/
  firebaseappcheckProjectsAppsDebugTokensList(
    req: operations.FirebaseappcheckProjectsAppsDebugTokensListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsDebugTokensListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/debugTokens", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsDebugTokensListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaListDebugTokensResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
  **/
  firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/deviceCheckConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeAppAttestAssertion - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeAppAttestAssertion(
    req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeAppAttestAssertion", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeAppAttestAttestation - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
  **/
  firebaseappcheckProjectsAppsExchangeAppAttestAttestation(
    req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeAppAttestAttestation", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeCustomToken - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeCustomToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeCustomToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeDebugToken - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
  **/
  firebaseappcheckProjectsAppsExchangeDebugToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeDebugToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeDeviceCheckToken - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeDeviceCheckToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeDeviceCheckToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangePlayIntegrityToken - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangePlayIntegrityToken(
    req: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangePlayIntegrityToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeRecaptchaEnterpriseToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeRecaptchaToken - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeRecaptchaToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeRecaptchaToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeRecaptchaV3Token - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(
    req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeRecaptchaV3Token", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsExchangeSafetyNetToken - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
  **/
  firebaseappcheckProjectsAppsExchangeSafetyNetToken(
    req: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:exchangeSafetyNetToken", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaAppCheckToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsGenerateAppAttestChallenge - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
  **/
  firebaseappcheckProjectsAppsGenerateAppAttestChallenge(
    req: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:generateAppAttestChallenge", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
  **/
  firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(
    req: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{app}:generatePlayIntegrityChallenge", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
  **/
  firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/playIntegrityConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsRecaptchaConfigBatchGet - Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
  **/
  firebaseappcheckProjectsAppsRecaptchaConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/recaptchaConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
  **/
  firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
  **/
  firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/recaptchaV3Config:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsAppsSafetyNetConfigBatchGet - Atomically gets the SafetyNetConfigs for the specified list of apps.
  **/
  firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(
    req: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/apps/-/safetyNetConfig:batchGet", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsServicesBatchUpdate - Atomically updates the specified Service configurations.
  **/
  firebaseappcheckProjectsServicesBatchUpdate(
    req: operations.FirebaseappcheckProjectsServicesBatchUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsServicesBatchUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsServicesBatchUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/services:batchUpdate", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsServicesBatchUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaBatchUpdateServicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsServicesGet - Gets the Service configuration for the specified service name.
  **/
  firebaseappcheckProjectsServicesGet(
    req: operations.FirebaseappcheckProjectsServicesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsServicesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsServicesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsServicesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsServicesList - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
  **/
  firebaseappcheckProjectsServicesList(
    req: operations.FirebaseappcheckProjectsServicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsServicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsServicesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/services", req.pathParams);
    
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
        const res: operations.FirebaseappcheckProjectsServicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaListServicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebaseappcheckProjectsServicesPatch - Updates the specified Service configuration.
  **/
  firebaseappcheckProjectsServicesPatch(
    req: operations.FirebaseappcheckProjectsServicesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseappcheckProjectsServicesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseappcheckProjectsServicesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}", req.pathParams);

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
        const res: operations.FirebaseappcheckProjectsServicesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleFirebaseAppcheckV1betaService = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
