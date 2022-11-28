import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IsOs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIsos - Get all ISOs
     *
     * Returns all available ISO objects.
    **/
    getIsos(req: operations.GetIsosRequest, config?: AxiosRequestConfig): Promise<operations.GetIsosResponse>;
    /**
     * getIsosId - Get an ISO
     *
     * Returns a specific ISO object.
    **/
    getIsosId(req: operations.GetIsosIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIsosIdResponse>;
}
