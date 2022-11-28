import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Saml {
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
   * createOrganizationSamlIdp - Create a SAML IdP for your organization.
   *
   * Create a SAML IdP for your organization.
  **/
  createOrganizationSamlIdp(
    req: operations.CreateOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrganizationSamlIdp201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteOrganizationSamlIdp - Remove a SAML IdP in your organization.
   *
   * Remove a SAML IdP in your organization.
  **/
  deleteOrganizationSamlIdp(
    req: operations.DeleteOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSaml - Returns the SAML SSO enabled settings for an organization.
   *
   * Returns the SAML SSO enabled settings for an organization.
  **/
  getOrganizationSaml(
    req: operations.GetOrganizationSamlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSaml200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlIdp - Get a SAML IdP from your organization.
   *
   * Get a SAML IdP from your organization.
  **/
  getOrganizationSamlIdp(
    req: operations.GetOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlIdp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrganizationSamlIdps - List the SAML IdPs in your organization.
   *
   * List the SAML IdPs in your organization.
  **/
  getOrganizationSamlIdps(
    req: operations.GetOrganizationSamlIdpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationSamlIdpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationSamlIdpsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOrganizationSamlIdpsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrganizationSamlIdps200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSaml - Updates the SAML SSO enabled settings for an organization.
   *
   * Updates the SAML SSO enabled settings for an organization.
  **/
  updateOrganizationSaml(
    req: operations.UpdateOrganizationSamlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSamlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSamlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateOrganizationSamlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSaml200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrganizationSamlIdp - Update a SAML IdP in your organization
   *
   * Update a SAML IdP in your organization
  **/
  updateOrganizationSamlIdp(
    req: operations.UpdateOrganizationSamlIdpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationSamlIdpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationSamlIdpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationId}/saml/idps/{idpId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateOrganizationSamlIdpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateOrganizationSamlIdp200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
