import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orderreturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentOrderreturnsAcknowledge - Acks an order return in your Merchant Center account.
    **/
    contentOrderreturnsAcknowledge(req: operations.ContentOrderreturnsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsAcknowledgeResponse>;
    /**
     * contentOrderreturnsCreateorderreturn - Create return in your Merchant Center account.
    **/
    contentOrderreturnsCreateorderreturn(req: operations.ContentOrderreturnsCreateorderreturnRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsCreateorderreturnResponse>;
    /**
     * contentOrderreturnsGet - Retrieves an order return from your Merchant Center account.
    **/
    contentOrderreturnsGet(req: operations.ContentOrderreturnsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsGetResponse>;
    /**
     * contentOrderreturnsLabelsCreate - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
    **/
    contentOrderreturnsLabelsCreate(req: operations.ContentOrderreturnsLabelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsLabelsCreateResponse>;
    /**
     * contentOrderreturnsList - Lists order returns in your Merchant Center account.
    **/
    contentOrderreturnsList(req: operations.ContentOrderreturnsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsListResponse>;
    /**
     * contentOrderreturnsProcess - Processes return in your Merchant Center account.
    **/
    contentOrderreturnsProcess(req: operations.ContentOrderreturnsProcessRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsProcessResponse>;
}
