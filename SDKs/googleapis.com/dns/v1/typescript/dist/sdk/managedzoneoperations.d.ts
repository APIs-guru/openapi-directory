import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ManagedZoneOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsManagedZoneOperationsGet - Fetches the representation of an existing Operation.
    **/
    dnsManagedZoneOperationsGet(req: operations.DnsManagedZoneOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZoneOperationsGetResponse>;
    /**
     * dnsManagedZoneOperationsList - Enumerates Operations for the given ManagedZone.
    **/
    dnsManagedZoneOperationsList(req: operations.DnsManagedZoneOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZoneOperationsListResponse>;
}
