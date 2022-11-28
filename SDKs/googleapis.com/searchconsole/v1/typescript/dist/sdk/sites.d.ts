import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webmastersSitesAdd -  Adds a site to the set of the user's sites in Search Console.
    **/
    webmastersSitesAdd(req: operations.WebmastersSitesAddRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesAddResponse>;
    /**
     * webmastersSitesDelete -  Removes a site from the set of the user's Search Console sites.
    **/
    webmastersSitesDelete(req: operations.WebmastersSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesDeleteResponse>;
    /**
     * webmastersSitesGet -  Retrieves information about specific site.
    **/
    webmastersSitesGet(req: operations.WebmastersSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesGetResponse>;
    /**
     * webmastersSitesList -  Lists the user's Search Console sites.
    **/
    webmastersSitesList(req: operations.WebmastersSitesListRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesListResponse>;
}
