import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Debug {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchDebugDatasourcesItemsCheckAccess - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchDebugDatasourcesItemsCheckAccess(req: operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse>;
    /**
     * cloudsearchDebugDatasourcesItemsSearchByViewUrl - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchDebugDatasourcesItemsSearchByViewUrl(req: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse>;
    /**
     * cloudsearchDebugIdentitysourcesItemsListForunmappedidentity - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchDebugIdentitysourcesItemsListForunmappedidentity(req: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse>;
    /**
     * cloudsearchDebugIdentitysourcesUnmappedidsList - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchDebugIdentitysourcesUnmappedidsList(req: operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse>;
}
