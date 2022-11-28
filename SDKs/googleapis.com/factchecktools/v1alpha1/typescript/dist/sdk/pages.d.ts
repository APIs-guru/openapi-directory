import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * factchecktoolsPagesCreate - Create `ClaimReview` markup on a page.
    **/
    factchecktoolsPagesCreate(req: operations.FactchecktoolsPagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesCreateResponse>;
    /**
     * factchecktoolsPagesDelete - Delete all `ClaimReview` markup on a page.
    **/
    factchecktoolsPagesDelete(req: operations.FactchecktoolsPagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesDeleteResponse>;
    /**
     * factchecktoolsPagesGet - Get all `ClaimReview` markup on a page.
    **/
    factchecktoolsPagesGet(req: operations.FactchecktoolsPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesGetResponse>;
    /**
     * factchecktoolsPagesList - List the `ClaimReview` markup pages for a specific URL or for an organization.
    **/
    factchecktoolsPagesList(req: operations.FactchecktoolsPagesListRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesListResponse>;
    /**
     * factchecktoolsPagesUpdate - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
    **/
    factchecktoolsPagesUpdate(req: operations.FactchecktoolsPagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesUpdateResponse>;
}
