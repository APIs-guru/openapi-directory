import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * discoveryApisGetRest - Retrieve the description of a particular version of an api.
    **/
    discoveryApisGetRest(req: operations.DiscoveryApisGetRestRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryApisGetRestResponse>;
    /**
     * discoveryApisList - Retrieve the list of APIs supported at this endpoint.
    **/
    discoveryApisList(req: operations.DiscoveryApisListRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryApisListResponse>;
}
