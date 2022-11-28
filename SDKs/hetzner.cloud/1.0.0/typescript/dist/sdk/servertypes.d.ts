import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServerTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getServerTypes - Get all Server Types
     *
     * Gets all Server type objects.
    **/
    getServerTypes(req: operations.GetServerTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetServerTypesResponse>;
    /**
     * getServerTypesId - Get a Server Type
     *
     * Gets a specific Server type object.
    **/
    getServerTypesId(req: operations.GetServerTypesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServerTypesIdResponse>;
}
