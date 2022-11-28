import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VppAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationSmVppAccount - Get a hash containing the unparsed token of the VPP account with the given ID
     *
     * Get a hash containing the unparsed token of the VPP account with the given ID
    **/
    getOrganizationSmVppAccount(req: operations.GetOrganizationSmVppAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountResponse>;
    /**
     * getOrganizationSmVppAccounts - List the VPP accounts in the organization
     *
     * List the VPP accounts in the organization
    **/
    getOrganizationSmVppAccounts(req: operations.GetOrganizationSmVppAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountsResponse>;
}
