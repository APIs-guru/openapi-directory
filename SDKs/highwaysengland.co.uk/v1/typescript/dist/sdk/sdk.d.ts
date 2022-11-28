import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://webtris.highwaysengland.co.uk/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * areasGet - Returns list of areas
    **/
    areasGet(req: operations.AreasGetRequest, config?: AxiosRequestConfig): Promise<operations.AreasGetResponse>;
    /**
     * getVVersionAreasAreaIds - Returns details of selected area
    **/
    getVVersionAreasAreaIds(req: operations.GetVVersionAreasAreaIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionAreasAreaIdsResponse>;
    /**
     * getVVersionReportsStartDateToEndDateReportType - Gets the daily report.
     *
     * Get's the report.
    **/
    getVVersionReportsStartDateToEndDateReportType(req: operations.GetVVersionReportsStartDateToEndDateReportTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionReportsStartDateToEndDateReportTypeResponse>;
    /**
     * getVVersionSitesSiteIds - Get selected sites
    **/
    getVVersionSitesSiteIds(req: operations.GetVVersionSitesSiteIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionSitesSiteIdsResponse>;
    /**
     * qualityGetDailyDataQualityForSite - Get Site DailyQuality
    **/
    qualityGetDailyDataQualityForSite(req: operations.QualityGetDailyDataQualityForSiteRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetDailyDataQualityForSiteResponse>;
    /**
     * qualityGetOverallDataQualityForSites - Get Site OverallQuality
    **/
    qualityGetOverallDataQualityForSites(req: operations.QualityGetOverallDataQualityForSitesRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetOverallDataQualityForSitesResponse>;
    /**
     * reportsIndex - Gets the daily report.
     *
     * Get's the report.
    **/
    reportsIndex(req: operations.ReportsIndexRequest, config?: AxiosRequestConfig): Promise<operations.ReportsIndexResponse>;
    /**
     * siteTypesGetSitesForPublicFacingApi - Returns the layer metadata for the LayerId specified.
    **/
    siteTypesGetSitesForPublicFacingApi(req: operations.SiteTypesGetSitesForPublicFacingApiRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesGetSitesForPublicFacingApiResponse>;
    /**
     * siteTypesIndex - Return list of site types
    **/
    siteTypesIndex(req: operations.SiteTypesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesIndexResponse>;
    /**
     * sitesIndex - Get a list of sites
    **/
    sitesIndex(req: operations.SitesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SitesIndexResponse>;
}
export {};
