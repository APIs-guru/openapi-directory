import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessverificationsLocationsFetchVerificationOptions - Reports all eligible verification options for a location in a specific language.
    **/
    mybusinessverificationsLocationsFetchVerificationOptions(req: operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse>;
    /**
     * mybusinessverificationsLocationsGetVoiceOfMerchantState - Gets the VoiceOfMerchant state.
    **/
    mybusinessverificationsLocationsGetVoiceOfMerchantState(req: operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse>;
    /**
     * mybusinessverificationsLocationsVerificationsComplete - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
    **/
    mybusinessverificationsLocationsVerificationsComplete(req: operations.MybusinessverificationsLocationsVerificationsCompleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerificationsCompleteResponse>;
    /**
     * mybusinessverificationsLocationsVerificationsList - List verifications of a location, ordered by create time.
    **/
    mybusinessverificationsLocationsVerificationsList(req: operations.MybusinessverificationsLocationsVerificationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerificationsListResponse>;
    /**
     * mybusinessverificationsLocationsVerify - Starts the verification process for a location.
    **/
    mybusinessverificationsLocationsVerify(req: operations.MybusinessverificationsLocationsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerifyResponse>;
}
