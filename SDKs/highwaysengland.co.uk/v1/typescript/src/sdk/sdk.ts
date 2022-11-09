import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://webtris.highwaysengland.co.uk/api",
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
  
  // AreasGet - Returns list of areas
  AreasGet(
    req: operations.AreasGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AreasGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AreasGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/areas", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AreasGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.areaResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVVersionAreasAreaIds - Returns details of selected area
  GetVVersionAreasAreaIds(
    req: operations.GetVVersionAreasAreaIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVVersionAreasAreaIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVVersionAreasAreaIdsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/areas/{area_Ids}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVVersionAreasAreaIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.areaResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVVersionReportsStartDateToEndDateReportType - Gets the daily report.
  /** 
   * Get's the report.
  **/
  GetVVersionReportsStartDateToEndDateReportType(
    req: operations.GetVVersionReportsStartDateToEndDateReportTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVVersionReportsStartDateToEndDateReportTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVVersionReportsStartDateToEndDateReportTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/reports/{start_date}/to/{end_date}/{report_type}", req.pathParams);
    
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
        let res: operations.GetVVersionReportsStartDateToEndDateReportTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVVersionSitesSiteIds - Get selected sites
  GetVVersionSitesSiteIds(
    req: operations.GetVVersionSitesSiteIdsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVVersionSitesSiteIdsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVVersionSitesSiteIdsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/sites/{site_Ids}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVVersionSitesSiteIdsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // QualityGetDailyDataQualityForSite - Get Site DailyQuality
  QualityGetDailyDataQualityForSite(
    req: operations.QualityGetDailyDataQualityForSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QualityGetDailyDataQualityForSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QualityGetDailyDataQualityForSiteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/quality/daily", req.pathParams);
    
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
        let res: operations.QualityGetDailyDataQualityForSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dailyQualityResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // QualityGetOverallDataQualityForSites - Get Site OverallQuality
  QualityGetOverallDataQualityForSites(
    req: operations.QualityGetOverallDataQualityForSitesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QualityGetOverallDataQualityForSitesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QualityGetOverallDataQualityForSitesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/quality/overall", req.pathParams);
    
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
        let res: operations.QualityGetOverallDataQualityForSitesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.overallQualityResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportsIndex - Gets the daily report.
  /** 
   * Get's the report.
  **/
  ReportsIndex(
    req: operations.ReportsIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportsIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportsIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/reports/{report_type}", req.pathParams);
    
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
        let res: operations.ReportsIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.object = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SiteTypesGetSitesForPublicFacingApi - Returns the layer metadata for the LayerId specified.
  SiteTypesGetSitesForPublicFacingApi(
    req: operations.SiteTypesGetSitesForPublicFacingApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SiteTypesGetSitesForPublicFacingApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SiteTypesGetSitesForPublicFacingApiRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/sitetypes/{siteType_Id}/sites", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SiteTypesGetSitesForPublicFacingApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteTypeLayer = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 404:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SiteTypesIndex - Return list of site types
  SiteTypesIndex(
    req: operations.SiteTypesIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SiteTypesIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SiteTypesIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/sitetypes", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SiteTypesIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteTypeResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SitesIndex - Get a list of sites
  SitesIndex(
    req: operations.SitesIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SitesIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SitesIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v{version}/sites", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SitesIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.siteResponse = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
