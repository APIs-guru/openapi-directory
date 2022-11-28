import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Iam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * policytroubleshooterIamTroubleshoot - Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.
    **/
    policytroubleshooterIamTroubleshoot(req: operations.PolicytroubleshooterIamTroubleshootRequest, config?: AxiosRequestConfig): Promise<operations.PolicytroubleshooterIamTroubleshootResponse>;
}
