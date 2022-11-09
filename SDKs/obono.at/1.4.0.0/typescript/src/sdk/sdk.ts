import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://obono.at/api/v1",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


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
  
  // GetAuth - Request a JWT access token using your obono username and password.
  GetAuth(
    req: operations.GetAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuthRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBelegeBelegUuid - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
  GetBelegeBelegUuid(
    req: operations.GetBelegeBelegUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBelegeBelegUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBelegeBelegUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/belege/{belegUuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBelegeBelegUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.beleg = httpRes?.data;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportCsvRegistrierkassenRegistrierkasseUuidBelege(
    req: operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/csv/registrierkassen/{registrierkasseUuid}/belege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportDep131RegistrierkassenRegistrierkasseUuidBelege(
    req: operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/dep131/registrierkassen/{registrierkasseUuid}/belege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportDep7RegistrierkassenRegistrierkasseUuidBelege(
    req: operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/dep7/registrierkassen/{registrierkasseUuid}/belege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportGobdRegistrierkassenRegistrierkasseUuid(
    req: operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/gobd/registrierkassen/{registrierkasseUuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportHtmlBelegeBelegUuid(
    req: operations.GetExportHtmlBelegeBelegUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportHtmlBelegeBelegUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportHtmlBelegeBelegUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/html/belege/{belegUuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExportHtmlBelegeBelegUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportPdfBelegeBelegUuid(
    req: operations.GetExportPdfBelegeBelegUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportPdfBelegeBelegUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportPdfBelegeBelegUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/pdf/belege/{belegUuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExportPdfBelegeBelegUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportQrBelegeBelegUuid(
    req: operations.GetExportQrBelegeBelegUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportQrBelegeBelegUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportQrBelegeBelegUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/qr/belege/{belegUuid}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExportQrBelegeBelegUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportThermalPrintBelegeBelegUuid(
    req: operations.GetExportThermalPrintBelegeBelegUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportThermalPrintBelegeBelegUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportThermalPrintBelegeBelegUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/thermal-print/belege/{belegUuid}", req.pathParams);
    
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
        let res: operations.GetExportThermalPrintBelegeBelegUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetExportXlsRegistrierkassenRegistrierkasseUuidBelege(
    req: operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/export/xls/registrierkassen/{registrierkasseUuid}/belege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddBeleg - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
  AddBeleg(
    req: operations.AddBelegRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddBelegResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddBelegRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddBelegResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            break;
          case 403:
            break;
          case 409:
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateAbschluss - Generates an `Abschlussbeleg`.
  CreateAbschluss(
    req: operations.CreateAbschlussRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAbschlussResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAbschlussRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/abschluss", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateAbschlussResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBeleg - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
  GetBeleg(
    req: operations.GetBelegRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBelegResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBelegRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBelegResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.beleg = httpRes?.data;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBelege - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
  GetBelege(
    req: operations.GetBelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/belege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetBelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.belege = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDep - Generates a DEP file.
  GetDep(
    req: operations.GetDepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDepRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/dep", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMonatsbelege - Returns a list of `Monatsbelege`.
  GetMonatsbelege(
    req: operations.GetMonatsbelegeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMonatsbelegeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMonatsbelegeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}/monatsbelege", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetMonatsbelegeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.monatsbelegs = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRegistrierkasse - Returns information about a particular `Registrierkasse`.
  GetRegistrierkasse(
    req: operations.GetRegistrierkasseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistrierkasseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegistrierkasseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrierkassen/{registrierkasseUuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRegistrierkasseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.registrierkasse = httpRes?.data;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
