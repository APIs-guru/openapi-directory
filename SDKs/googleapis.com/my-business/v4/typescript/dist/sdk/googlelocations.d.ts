import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GoogleLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessGoogleLocationsReport - Report a GoogleLocation.
    **/
    mybusinessGoogleLocationsReport(req: operations.MybusinessGoogleLocationsReportRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessGoogleLocationsReportResponse>;
    /**
     * mybusinessGoogleLocationsSearch - Search all of the possible locations that are a match to the specified request.
    **/
    mybusinessGoogleLocationsSearch(req: operations.MybusinessGoogleLocationsSearchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessGoogleLocationsSearchResponse>;
}
