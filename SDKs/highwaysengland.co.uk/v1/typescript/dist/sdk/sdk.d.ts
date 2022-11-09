import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AreasGet(req: operations.AreasGetRequest, config?: AxiosRequestConfig): Promise<operations.AreasGetResponse>;
    GetVVersionAreasAreaIds(req: operations.GetVVersionAreasAreaIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionAreasAreaIdsResponse>;
    /**
     * Get's the report.
    **/
    GetVVersionReportsStartDateToEndDateReportType(req: operations.GetVVersionReportsStartDateToEndDateReportTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionReportsStartDateToEndDateReportTypeResponse>;
    GetVVersionSitesSiteIds(req: operations.GetVVersionSitesSiteIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionSitesSiteIdsResponse>;
    QualityGetDailyDataQualityForSite(req: operations.QualityGetDailyDataQualityForSiteRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetDailyDataQualityForSiteResponse>;
    QualityGetOverallDataQualityForSites(req: operations.QualityGetOverallDataQualityForSitesRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetOverallDataQualityForSitesResponse>;
    /**
     * Get's the report.
    **/
    ReportsIndex(req: operations.ReportsIndexRequest, config?: AxiosRequestConfig): Promise<operations.ReportsIndexResponse>;
    SiteTypesGetSitesForPublicFacingApi(req: operations.SiteTypesGetSitesForPublicFacingApiRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesGetSitesForPublicFacingApiResponse>;
    SiteTypesIndex(req: operations.SiteTypesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesIndexResponse>;
    SitesIndex(req: operations.SitesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SitesIndexResponse>;
}
export {};
