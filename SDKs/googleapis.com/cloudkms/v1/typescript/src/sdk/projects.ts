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
   * cloudkmsProjectsLocationsEkmConnectionsCreate - Creates a new EkmConnection in a given Project and Location.
  **/
  cloudkmsProjectsLocationsEkmConnectionsCreate(
    req: operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/ekmConnections", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ekmConnection = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsEkmConnectionsList - Lists EkmConnections.
  **/
  cloudkmsProjectsLocationsEkmConnectionsList(
    req: operations.CloudkmsProjectsLocationsEkmConnectionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsEkmConnectionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/ekmConnections", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsEkmConnectionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEkmConnectionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsGenerateRandomBytes - Generate random bytes using the Cloud KMS randomness source in the provided location.
  **/
  cloudkmsProjectsLocationsGenerateRandomBytes(
    req: operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{location}:generateRandomBytes", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateRandomBytesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCreate - Create a new KeyRing in a given Project and Location.
  **/
  cloudkmsProjectsLocationsKeyRingsCreate(
    req: operations.CloudkmsProjectsLocationsKeyRingsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/keyRings", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CloudkmsProjectsLocationsKeyRingsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyRing = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/cryptoKeys", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:asymmetricDecrypt", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.asymmetricDecryptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:asymmetricSign", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.asymmetricSignResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/cryptoKeyVersions", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeyVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:destroy", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeyVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}/publicKey", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/cryptoKeyVersions:import", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeyVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList - Lists CryptoKeyVersions.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/cryptoKeyVersions", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCryptoKeyVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:macSign", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.macSignResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:macVerify", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.macVerifyResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeyVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:restore", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeyVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:decrypt", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.decryptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:encrypt", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysList - Lists CryptoKeys.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysList(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/cryptoKeys", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCryptoKeysResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
  **/
  cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion(
    req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:updatePrimaryVersion", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsCreate - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsCreate(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/importJobs", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsGet - Returns metadata for a given ImportJob.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsGet(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{resource}:getIamPolicy", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsList - Lists ImportJobs.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsList(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/importJobs", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listImportJobsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{resource}:setIamPolicy", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
  **/
  cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions(
    req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{resource}:testIamPermissions", req.pathParams);

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
        const res: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.testIamPermissionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsKeyRingsList - Lists KeyRings.
  **/
  cloudkmsProjectsLocationsKeyRingsList(
    req: operations.CloudkmsProjectsLocationsKeyRingsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsKeyRingsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsKeyRingsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/keyRings", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsKeyRingsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listKeyRingsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudkmsProjectsLocationsList - Lists information about the supported locations for this service.
  **/
  cloudkmsProjectsLocationsList(
    req: operations.CloudkmsProjectsLocationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudkmsProjectsLocationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudkmsProjectsLocationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}/locations", req.pathParams);
    
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
        const res: operations.CloudkmsProjectsLocationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listLocationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
