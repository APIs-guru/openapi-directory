import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Csses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentCssesGet - Retrieves a single CSS domain by ID.
    **/
    contentCssesGet(req: operations.ContentCssesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentCssesGetResponse>;
    /**
     * contentCssesList - Lists CSS domains affiliated with a CSS group.
    **/
    contentCssesList(req: operations.ContentCssesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentCssesListResponse>;
    /**
     * contentCssesUpdatelabels - Updates labels that are assigned to a CSS domain by its CSS group.
    **/
    contentCssesUpdatelabels(req: operations.ContentCssesUpdatelabelsRequest, config?: AxiosRequestConfig): Promise<operations.ContentCssesUpdatelabelsResponse>;
}
