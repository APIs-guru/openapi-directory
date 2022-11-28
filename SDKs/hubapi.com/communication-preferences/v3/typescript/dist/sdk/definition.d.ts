import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Definition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCommunicationPreferencesV3DefinitionsGetPage - Get subscription definitions
     *
     * Get a list of all subscription definitions for the portal
    **/
    getCommunicationPreferencesV3DefinitionsGetPage(req: operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse>;
}
