import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webfonts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webfontsWebfontsList - Retrieves the list of fonts currently served by the Google Fonts Developer API.
    **/
    webfontsWebfontsList(req: operations.WebfontsWebfontsListRequest, config?: AxiosRequestConfig): Promise<operations.WebfontsWebfontsListResponse>;
}
