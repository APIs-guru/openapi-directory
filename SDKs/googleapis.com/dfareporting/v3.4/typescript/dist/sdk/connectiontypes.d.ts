import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConnectionTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingConnectionTypesGet - Gets one connection type by ID.
    **/
    dfareportingConnectionTypesGet(req: operations.DfareportingConnectionTypesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingConnectionTypesGetResponse>;
    /**
     * dfareportingConnectionTypesList - Retrieves a list of connection types.
    **/
    dfareportingConnectionTypesList(req: operations.DfareportingConnectionTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingConnectionTypesListResponse>;
}
