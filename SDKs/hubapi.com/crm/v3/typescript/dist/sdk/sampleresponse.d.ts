import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SampleResponse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse - Get sample card detail response
     *
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
    **/
    getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse(config?: AxiosRequestConfig): Promise<operations.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse>;
}
