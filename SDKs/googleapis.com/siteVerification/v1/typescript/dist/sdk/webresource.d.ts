import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WebResource {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * siteVerificationWebResourceDelete - Relinquish ownership of a website or domain.
    **/
    siteVerificationWebResourceDelete(req: operations.SiteVerificationWebResourceDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceDeleteResponse>;
    /**
     * siteVerificationWebResourceGet - Get the most current data for a website or domain.
    **/
    siteVerificationWebResourceGet(req: operations.SiteVerificationWebResourceGetRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetResponse>;
    /**
     * siteVerificationWebResourceGetToken - Get a verification token for placing on a website or domain.
    **/
    siteVerificationWebResourceGetToken(req: operations.SiteVerificationWebResourceGetTokenRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetTokenResponse>;
    /**
     * siteVerificationWebResourceInsert - Attempt verification of a website or domain.
    **/
    siteVerificationWebResourceInsert(req: operations.SiteVerificationWebResourceInsertRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceInsertResponse>;
    /**
     * siteVerificationWebResourceList - Get the list of your verified websites and domains.
    **/
    siteVerificationWebResourceList(req: operations.SiteVerificationWebResourceListRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceListResponse>;
    /**
     * siteVerificationWebResourcePatch - Modify the list of owners for your website or domain. This method supports patch semantics.
    **/
    siteVerificationWebResourcePatch(req: operations.SiteVerificationWebResourcePatchRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourcePatchResponse>;
    /**
     * siteVerificationWebResourceUpdate - Modify the list of owners for your website or domain.
    **/
    siteVerificationWebResourceUpdate(req: operations.SiteVerificationWebResourceUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceUpdateResponse>;
}
