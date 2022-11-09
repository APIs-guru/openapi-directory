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
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty",
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

// SDK Documentation: https://developers.google.com/identity-toolkit/v3/
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
  
  // IdentitytoolkitRelyingpartyCreateAuthUri - Creates the URI used by the IdP to authenticate the user.
  IdentitytoolkitRelyingpartyCreateAuthUri(
    req: operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/createAuthUri";
    
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
        let res: operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createAuthUriResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyDeleteAccount - Delete user account.
  IdentitytoolkitRelyingpartyDeleteAccount(
    req: operations.IdentitytoolkitRelyingpartyDeleteAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyDeleteAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyDeleteAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/deleteAccount";
    
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
        let res: operations.IdentitytoolkitRelyingpartyDeleteAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteAccountResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyDownloadAccount - Batch download user accounts.
  IdentitytoolkitRelyingpartyDownloadAccount(
    req: operations.IdentitytoolkitRelyingpartyDownloadAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyDownloadAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyDownloadAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/downloadAccount";
    
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
        let res: operations.IdentitytoolkitRelyingpartyDownloadAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.downloadAccountResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyEmailLinkSignin - Reset password for a user.
  IdentitytoolkitRelyingpartyEmailLinkSignin(
    req: operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/emailLinkSignin";
    
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
        let res: operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.emailLinkSigninResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyGetAccountInfo - Returns the account info.
  IdentitytoolkitRelyingpartyGetAccountInfo(
    req: operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getAccountInfo";
    
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
        let res: operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountInfoResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyGetOobConfirmationCode - Get a code for user action confirmation.
  IdentitytoolkitRelyingpartyGetOobConfirmationCode(
    req: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getOobConfirmationCode";
    
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
        let res: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOobConfirmationCodeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyGetProjectConfig - Get project configuration.
  IdentitytoolkitRelyingpartyGetProjectConfig(
    req: operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getProjectConfig";
    
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
        let res: operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartyGetProjectConfigResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyGetPublicKeys - Get token signing public key.
  IdentitytoolkitRelyingpartyGetPublicKeys(
    req: operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/publicKeys";
    
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
        let res: operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartyGetPublicKeysResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyGetRecaptchaParam - Get recaptcha secure param.
  IdentitytoolkitRelyingpartyGetRecaptchaParam(
    req: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getRecaptchaParam";
    
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
        let res: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRecaptchaParamResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyResetPassword - Reset password for a user.
  IdentitytoolkitRelyingpartyResetPassword(
    req: operations.IdentitytoolkitRelyingpartyResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyResetPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resetPassword";
    
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
        let res: operations.IdentitytoolkitRelyingpartyResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.resetPasswordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartySendVerificationCode - Send SMS verification code.
  IdentitytoolkitRelyingpartySendVerificationCode(
    req: operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sendVerificationCode";
    
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
        let res: operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartySendVerificationCodeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartySetAccountInfo - Set account info for a user.
  IdentitytoolkitRelyingpartySetAccountInfo(
    req: operations.IdentitytoolkitRelyingpartySetAccountInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartySetAccountInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartySetAccountInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setAccountInfo";
    
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
        let res: operations.IdentitytoolkitRelyingpartySetAccountInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setAccountInfoResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartySetProjectConfig - Set project configuration.
  IdentitytoolkitRelyingpartySetProjectConfig(
    req: operations.IdentitytoolkitRelyingpartySetProjectConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartySetProjectConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartySetProjectConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setProjectConfig";
    
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
        let res: operations.IdentitytoolkitRelyingpartySetProjectConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartySetProjectConfigResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartySignOutUser - Sign out user.
  IdentitytoolkitRelyingpartySignOutUser(
    req: operations.IdentitytoolkitRelyingpartySignOutUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartySignOutUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartySignOutUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/signOutUser";
    
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
        let res: operations.IdentitytoolkitRelyingpartySignOutUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartySignOutUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartySignupNewUser - Signup new user.
  IdentitytoolkitRelyingpartySignupNewUser(
    req: operations.IdentitytoolkitRelyingpartySignupNewUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartySignupNewUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartySignupNewUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/signupNewUser";
    
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
        let res: operations.IdentitytoolkitRelyingpartySignupNewUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.signupNewUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyUploadAccount - Batch upload existing user accounts.
  IdentitytoolkitRelyingpartyUploadAccount(
    req: operations.IdentitytoolkitRelyingpartyUploadAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyUploadAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyUploadAccountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploadAccount";
    
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
        let res: operations.IdentitytoolkitRelyingpartyUploadAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.uploadAccountResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyVerifyAssertion - Verifies the assertion returned by the IdP.
  IdentitytoolkitRelyingpartyVerifyAssertion(
    req: operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/verifyAssertion";
    
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
        let res: operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyAssertionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyVerifyCustomToken - Verifies the developer asserted ID token.
  IdentitytoolkitRelyingpartyVerifyCustomToken(
    req: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/verifyCustomToken";
    
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
        let res: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyCustomTokenResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyVerifyPassword - Verifies the user entered password.
  IdentitytoolkitRelyingpartyVerifyPassword(
    req: operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/verifyPassword";
    
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
        let res: operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.verifyPasswordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IdentitytoolkitRelyingpartyVerifyPhoneNumber - Verifies ownership of a phone number and creates/updates the user account accordingly.
  IdentitytoolkitRelyingpartyVerifyPhoneNumber(
    req: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/verifyPhoneNumber";
    
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
        let res: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.identitytoolkitRelyingpartyVerifyPhoneNumberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
