import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Quote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV1WorkgroupsWorkgroupIdQuotes - List the quotes of workgroup level
     *
     * List the quotes of workgroup level
    **/
    getV1WorkgroupsWorkgroupIdQuotes(req: operations.GetV1WorkgroupsWorkgroupIdQuotesRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdQuotesResponse>;
    /**
     * getQuote - Get a specific quote of project
     *
     * Get a specific quote of project
    **/
    getQuote(req: operations.GetQuoteRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteResponse>;
    /**
     * getQuoteList - List the quotes
     *
     * List the quotes
    **/
    getQuoteList(req: operations.GetQuoteListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteListResponse>;
    /**
     * getQuoteStateList - List the quote states
     *
     * List the quote states
    **/
    getQuoteStateList(req: operations.GetQuoteStateListRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteStateListResponse>;
    /**
     * putQuote - Accept / Reject a Quote
     *
     * Accept / Reject a Quote
    **/
    putQuote(req: operations.PutQuoteRequest, config?: AxiosRequestConfig): Promise<operations.PutQuoteResponse>;
}
