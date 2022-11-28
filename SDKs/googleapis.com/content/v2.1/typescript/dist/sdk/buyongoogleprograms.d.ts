import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Buyongoogleprograms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentBuyongoogleprogramsActivate - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
    **/
    contentBuyongoogleprogramsActivate(req: operations.ContentBuyongoogleprogramsActivateRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsActivateResponse>;
    /**
     * contentBuyongoogleprogramsGet - Retrieves a status of the BoG program for your Merchant Center account.
    **/
    contentBuyongoogleprogramsGet(req: operations.ContentBuyongoogleprogramsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsGetResponse>;
    /**
     * contentBuyongoogleprogramsOnboard - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
    **/
    contentBuyongoogleprogramsOnboard(req: operations.ContentBuyongoogleprogramsOnboardRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsOnboardResponse>;
    /**
     * contentBuyongoogleprogramsPatch - Updates the status of the BoG program for your Merchant Center account.
    **/
    contentBuyongoogleprogramsPatch(req: operations.ContentBuyongoogleprogramsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsPatchResponse>;
    /**
     * contentBuyongoogleprogramsPause - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
    **/
    contentBuyongoogleprogramsPause(req: operations.ContentBuyongoogleprogramsPauseRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsPauseResponse>;
    /**
     * contentBuyongoogleprogramsRequestreview - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.
    **/
    contentBuyongoogleprogramsRequestreview(req: operations.ContentBuyongoogleprogramsRequestreviewRequest, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsRequestreviewResponse>;
}
