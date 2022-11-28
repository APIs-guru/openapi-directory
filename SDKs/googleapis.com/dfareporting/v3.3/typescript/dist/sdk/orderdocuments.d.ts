import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OrderDocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingOrderDocumentsGet - Gets one order document by ID.
    **/
    dfareportingOrderDocumentsGet(req: operations.DfareportingOrderDocumentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOrderDocumentsGetResponse>;
    /**
     * dfareportingOrderDocumentsList - Retrieves a list of order documents, possibly filtered. This method supports paging.
    **/
    dfareportingOrderDocumentsList(req: operations.DfareportingOrderDocumentsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOrderDocumentsListResponse>;
}
