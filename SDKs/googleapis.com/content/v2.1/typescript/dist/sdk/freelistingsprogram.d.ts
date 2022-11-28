import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Freelistingsprogram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentFreelistingsprogramGet - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
    **/
    contentFreelistingsprogramGet(req: operations.ContentFreelistingsprogramGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentFreelistingsprogramGetResponse>;
    /**
     * contentFreelistingsprogramRequestreview - Requests a review of free listings in a specific region. This method is only available to selected merchants.
    **/
    contentFreelistingsprogramRequestreview(req: operations.ContentFreelistingsprogramRequestreviewRequest, config?: AxiosRequestConfig): Promise<operations.ContentFreelistingsprogramRequestreviewResponse>;
}
