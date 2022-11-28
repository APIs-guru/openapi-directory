import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlertTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
     *
     * Return a list of alert types to be used with managing webhook alerts
    **/
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
}
