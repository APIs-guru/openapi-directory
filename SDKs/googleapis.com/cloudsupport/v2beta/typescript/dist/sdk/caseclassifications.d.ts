import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CaseClassifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsupportCaseClassificationsSearch - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".
    **/
    cloudsupportCaseClassificationsSearch(req: operations.CloudsupportCaseClassificationsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCaseClassificationsSearchResponse>;
}
