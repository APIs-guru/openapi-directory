import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Datacenters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDatacenters - Get all Datacenters
     *
     * Returns all Datacenter objects.
    **/
    getDatacenters(req: operations.GetDatacentersRequest, config?: AxiosRequestConfig): Promise<operations.GetDatacentersResponse>;
    /**
     * getDatacentersId - Get a Datacenter
     *
     * Returns a specific Datacenter object.
    **/
    getDatacentersId(req: operations.GetDatacentersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDatacentersIdResponse>;
}
