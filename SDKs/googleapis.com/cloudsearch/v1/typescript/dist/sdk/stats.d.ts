import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchStatsGetIndex - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsGetIndex(req: operations.CloudsearchStatsGetIndexRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetIndexResponse>;
    /**
     * cloudsearchStatsGetQuery - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsGetQuery(req: operations.CloudsearchStatsGetQueryRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetQueryResponse>;
    /**
     * cloudsearchStatsGetSearchapplication - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsGetSearchapplication(req: operations.CloudsearchStatsGetSearchapplicationRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetSearchapplicationResponse>;
    /**
     * cloudsearchStatsGetSession - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsGetSession(req: operations.CloudsearchStatsGetSessionRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetSessionResponse>;
    /**
     * cloudsearchStatsGetUser - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsGetUser(req: operations.CloudsearchStatsGetUserRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsGetUserResponse>;
    /**
     * cloudsearchStatsIndexDatasourcesGet - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsIndexDatasourcesGet(req: operations.CloudsearchStatsIndexDatasourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsIndexDatasourcesGetResponse>;
    /**
     * cloudsearchStatsQuerySearchapplicationsGet - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsQuerySearchapplicationsGet(req: operations.CloudsearchStatsQuerySearchapplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsQuerySearchapplicationsGetResponse>;
    /**
     * cloudsearchStatsSessionSearchapplicationsGet - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsSessionSearchapplicationsGet(req: operations.CloudsearchStatsSessionSearchapplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsSessionSearchapplicationsGetResponse>;
    /**
     * cloudsearchStatsUserSearchapplicationsGet - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
    **/
    cloudsearchStatsUserSearchapplicationsGet(req: operations.CloudsearchStatsUserSearchapplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchStatsUserSearchapplicationsGetResponse>;
}
