import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * websecurityscannerProjectsScanConfigsCreate - Creates a new ScanConfig.
    **/
    websecurityscannerProjectsScanConfigsCreate(req: operations.WebsecurityscannerProjectsScanConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsCreateResponse>;
    /**
     * websecurityscannerProjectsScanConfigsDelete - Deletes an existing ScanConfig and its child resources.
    **/
    websecurityscannerProjectsScanConfigsDelete(req: operations.WebsecurityscannerProjectsScanConfigsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsDeleteResponse>;
    /**
     * websecurityscannerProjectsScanConfigsList - Lists ScanConfigs under a given project.
    **/
    websecurityscannerProjectsScanConfigsList(req: operations.WebsecurityscannerProjectsScanConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsListResponse>;
    /**
     * websecurityscannerProjectsScanConfigsPatch - Updates a ScanConfig. This method support partial update of a ScanConfig.
    **/
    websecurityscannerProjectsScanConfigsPatch(req: operations.WebsecurityscannerProjectsScanConfigsPatchRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsPatchResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList - List CrawledUrls under a given ScanRun.
    **/
    websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList - List all FindingTypeStats under a given ScanRun.
    **/
    websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingsGet - Gets a Finding.
    **/
    websecurityscannerProjectsScanConfigsScanRunsFindingsGet(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsFindingsList - List Findings under a given ScanRun.
    **/
    websecurityscannerProjectsScanConfigsScanRunsFindingsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsList - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
    **/
    websecurityscannerProjectsScanConfigsScanRunsList(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse>;
    /**
     * websecurityscannerProjectsScanConfigsScanRunsStop - Stops a ScanRun. The stopped ScanRun is returned.
    **/
    websecurityscannerProjectsScanConfigsScanRunsStop(req: operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse>;
    /**
     * websecurityscannerProjectsScanConfigsStart - Start a ScanRun according to the given ScanConfig.
    **/
    websecurityscannerProjectsScanConfigsStart(req: operations.WebsecurityscannerProjectsScanConfigsStartRequest, config?: AxiosRequestConfig): Promise<operations.WebsecurityscannerProjectsScanConfigsStartResponse>;
}
