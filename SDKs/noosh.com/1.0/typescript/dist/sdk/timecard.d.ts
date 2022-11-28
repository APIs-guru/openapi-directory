import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TimeCard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMyTimeCard - Get a specific my time cards
     *
     * Get a specific my time cards
    **/
    getMyTimeCard(req: operations.GetMyTimeCardRequest, config?: AxiosRequestConfig): Promise<operations.GetMyTimeCardResponse>;
    /**
     * getMyTimeCardList - List my time cards
     *
     * List my time cards
    **/
    getMyTimeCardList(req: operations.GetMyTimeCardListRequest, config?: AxiosRequestConfig): Promise<operations.GetMyTimeCardListResponse>;
    /**
     * getReceivedTimeCard - List a specific received time cards
     *
     * List a specific received time cards
    **/
    getReceivedTimeCard(req: operations.GetReceivedTimeCardRequest, config?: AxiosRequestConfig): Promise<operations.GetReceivedTimeCardResponse>;
    /**
     * getReceivedTimeCardList - List received time cards
     *
     * List received time cards
    **/
    getReceivedTimeCardList(req: operations.GetReceivedTimeCardListRequest, config?: AxiosRequestConfig): Promise<operations.GetReceivedTimeCardListResponse>;
}
