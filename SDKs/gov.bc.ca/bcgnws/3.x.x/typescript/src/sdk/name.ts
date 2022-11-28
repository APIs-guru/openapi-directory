import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Name {
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
   * getNamesChanges - Search for names with metadata changes in a given period
   *
   * Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.
  **/
  getNamesChanges(
    req: operations.GetNamesChangesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesChangesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesChangesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/changes";
    
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
        const res: operations.GetNamesChangesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesDecisionsRecent - Search for names affected by recent naming decision
   *
   * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.
  **/
  getNamesDecisionsRecent(
    req: operations.GetNamesDecisionsRecentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesDecisionsRecentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesDecisionsRecentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/decisions/recent";
    
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
        const res: operations.GetNamesDecisionsRecentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesDecisionsYear - Search for names affected by naming decisions in a given year
   *
   * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.
  **/
  getNamesDecisionsYear(
    req: operations.GetNamesDecisionsYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesDecisionsYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesDecisionsYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/decisions/year";
    
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
        const res: operations.GetNamesDecisionsYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesInside - Search in a geographic area
   *
   * Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.
  **/
  getNamesInside(
    req: operations.GetNamesInsideRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesInsideResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesInsideRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/inside";
    
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
        const res: operations.GetNamesInsideResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesNameIdOutputFormat - Get a name by its nameId
   *
   * Get information about the geographical name with the specified nameId.
  **/
  getNamesNameIdOutputFormat(
    req: operations.GetNamesNameIdOutputFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesNameIdOutputFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesNameIdOutputFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/names/{nameId}.{outputFormat}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNamesNameIdOutputFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesNear - Search near to a geographic point
   *
   * Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.
  **/
  getNamesNear(
    req: operations.GetNamesNearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesNearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesNearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/near";
    
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
        const res: operations.GetNamesNearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesNotOfficialSearch - Search by name, limit to unofficial names only
   *
   * Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
  **/
  getNamesNotOfficialSearch(
    req: operations.GetNamesNotOfficialSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesNotOfficialSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesNotOfficialSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/notOfficial/search";
    
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
        const res: operations.GetNamesNotOfficialSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesOfficialSearch - Search by name, limit to official names only
   *
   * Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
  **/
  getNamesOfficialSearch(
    req: operations.GetNamesOfficialSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesOfficialSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesOfficialSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/official/search";
    
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
        const res: operations.GetNamesOfficialSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamesSearch - Search by name
   *
   * Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.
  **/
  getNamesSearch(
    req: operations.GetNamesSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamesSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamesSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/names/search";
    
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
        const res: operations.GetNamesSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
