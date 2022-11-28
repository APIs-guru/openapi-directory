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
     * retrieveAPage - Retrieve a Page
     *
     * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content.
    **/
    retrieveAPage(req: operations.RetrieveAPageRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAPageResponse>;
    /**
     * updatePageProperties - Update Page properties
     *
     * Updates a page by setting the values of any properties specified in the JSON body of the request. Properties not updated via parameters will remain unchanged.
    **/
    updatePageProperties(req: operations.UpdatePagePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePagePropertiesResponse>;
}
