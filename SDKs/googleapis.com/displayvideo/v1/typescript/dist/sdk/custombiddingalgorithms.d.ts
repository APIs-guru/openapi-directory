import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomBiddingAlgorithms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoCustomBiddingAlgorithmsCreate - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
    **/
    displayvideoCustomBiddingAlgorithmsCreate(req: operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsGet - Gets a custom bidding algorithm.
    **/
    displayvideoCustomBiddingAlgorithmsGet(req: operations.DisplayvideoCustomBiddingAlgorithmsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsGetResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsList - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
    **/
    displayvideoCustomBiddingAlgorithmsList(req: operations.DisplayvideoCustomBiddingAlgorithmsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsListResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsPatch - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
    **/
    displayvideoCustomBiddingAlgorithmsPatch(req: operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsCreate - Creates a new custom bidding script. Returns the newly created script if successful.
    **/
    displayvideoCustomBiddingAlgorithmsScriptsCreate(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsGet - Gets a custom bidding script.
    **/
    displayvideoCustomBiddingAlgorithmsScriptsGet(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsScriptsList - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
    **/
    displayvideoCustomBiddingAlgorithmsScriptsList(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse>;
    /**
     * displayvideoCustomBiddingAlgorithmsUploadScript - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
    **/
    displayvideoCustomBiddingAlgorithmsUploadScript(req: operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse>;
}
