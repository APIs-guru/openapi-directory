import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCmsV3DomainsGetPage - Get current domains
     *
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
    **/
    getCmsV3DomainsGetPage(req: operations.GetCmsV3DomainsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsGetPageResponse>;
    /**
     * getCmsV3DomainsDomainIdGetById - Get a single domain
     *
     * Returns a single domains with the id specified.
    **/
    getCmsV3DomainsDomainIdGetById(req: operations.GetCmsV3DomainsDomainIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsDomainIdGetByIdResponse>;
}
