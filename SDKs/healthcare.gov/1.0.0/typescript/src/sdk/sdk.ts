import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://www.healthcare.gov",
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

// SDK Documentation: https://www.healthcare.gov/developers/
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
  
  // GetApiArticlesMediaTypeExtension - Returns pages content.
  GetApiArticlesMediaTypeExtension(
    req: operations.GetApiArticlesMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiArticlesMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiArticlesMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/articles{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiArticlesMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiBlogMediaTypeExtension - Returns pages content.
  GetApiBlogMediaTypeExtension(
    req: operations.GetApiBlogMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiBlogMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiBlogMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/blog{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiBlogMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiGlossaryMediaTypeExtension - Returns pages content.
  GetApiGlossaryMediaTypeExtension(
    req: operations.GetApiGlossaryMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiGlossaryMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiGlossaryMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/glossary{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiGlossaryMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiQuestionsMediaTypeExtension - Returns pages content.
  GetApiQuestionsMediaTypeExtension(
    req: operations.GetApiQuestionsMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiQuestionsMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiQuestionsMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/questions{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiQuestionsMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiStatesMediaTypeExtension - Returns pages content.
  GetApiStatesMediaTypeExtension(
    req: operations.GetApiStatesMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiStatesMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiStatesMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/states{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiStatesMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiTopicsMediaTypeExtension - Returns pages content.
  GetApiTopicsMediaTypeExtension(
    req: operations.GetApiTopicsMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiTopicsMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiTopicsMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/topics{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiTopicsMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBlogPageNameMediaTypeExtension - Returns pages content.
  GetBlogPageNameMediaTypeExtension(
    req: operations.GetBlogPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBlogPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBlogPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/blog/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBlogPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEsBlogPageNameMediaTypeExtension - Returns pages content.
  GetEsBlogPageNameMediaTypeExtension(
    req: operations.GetEsBlogPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEsBlogPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEsBlogPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/es/blog/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEsBlogPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEsGlossaryPageNameMediaTypeExtension - Returns pages content.
  GetEsGlossaryPageNameMediaTypeExtension(
    req: operations.GetEsGlossaryPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEsGlossaryPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEsGlossaryPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/es/glossary/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEsGlossaryPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEsPageNameMediaTypeExtension - Returns pages content.
  GetEsPageNameMediaTypeExtension(
    req: operations.GetEsPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEsPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEsPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/es/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEsPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEsQuestionPageNameMediaTypeExtension - Returns pages content.
  GetEsQuestionPageNameMediaTypeExtension(
    req: operations.GetEsQuestionPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEsQuestionPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEsQuestionPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/es/question/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEsQuestionPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEsStateNameMediaTypeExtension - Returns pages content.
  GetEsStateNameMediaTypeExtension(
    req: operations.GetEsStateNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEsStateNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEsStateNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/es/{stateName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEsStateNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGlossaryPageNameMediaTypeExtension - Returns pages content.
  GetGlossaryPageNameMediaTypeExtension(
    req: operations.GetGlossaryPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGlossaryPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGlossaryPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/glossary/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGlossaryPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPageNameMediaTypeExtension - Returns pages content.
  GetPageNameMediaTypeExtension(
    req: operations.GetPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetQuestionPageNameMediaTypeExtension - Returns pages content.
  GetQuestionPageNameMediaTypeExtension(
    req: operations.GetQuestionPageNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQuestionPageNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQuestionPageNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/question/{pageName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetQuestionPageNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStateNameMediaTypeExtension - Returns pages content.
  GetStateNameMediaTypeExtension(
    req: operations.GetStateNameMediaTypeExtensionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateNameMediaTypeExtensionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateNameMediaTypeExtensionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{stateName}{mediaTypeExtension}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStateNameMediaTypeExtensionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
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
