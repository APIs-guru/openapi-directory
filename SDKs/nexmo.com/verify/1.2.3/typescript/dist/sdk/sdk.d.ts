import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Request to unblock a network that has been blocked due to potential fraud detection
     * <div class="Vlt-callout Vlt-callout--critical">
     *   <div class="Vlt-callout__content">
     *     <h4>Network Unblock is switched off by default.</h4>
     *     Please contact Sales to enable the Network Unblock API for your account.
     *   </div>
     * </div>
    **/
    NetworkUnblock(req: operations.NetworkUnblockRequest, config?: AxiosRequestConfig): Promise<operations.NetworkUnblockResponse>;
    /**
     * Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
     *
     * 1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
     * 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
     *
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
    **/
    VerifyCheck(req: operations.VerifyCheckRequest, config?: AxiosRequestConfig): Promise<operations.VerifyCheckResponse>;
    /**
     * Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
     *
     *
     * 1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
     *
     * 2. Check the `status` in the response.
     *
     *
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
    **/
    VerifyControl(req: operations.VerifyControlRequest, config?: AxiosRequestConfig): Promise<operations.VerifyControlResponse>;
    /**
     * Use Verify request to generate and send a PIN to your user:
     *
     * 1. Create a request to send a verification code to your user.
     *
     * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
     *
     * 3. Use the `request_id` field in the response for the Verify check.
     *
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
    **/
    VerifyRequest(req: operations.VerifyRequestRequest, config?: AxiosRequestConfig): Promise<operations.VerifyRequestResponse>;
    /**
     * Use Verify request to generate and send a PIN to your user to authorize a payment:
     * 1. Create a request to send a verification code to your user.
     * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
     * 3. Use the `request_id` field in the response for the Verify check.
     * (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
    **/
    VerifyRequestWithPsd2(req: operations.VerifyRequestWithPsd2Request, config?: AxiosRequestConfig): Promise<operations.VerifyRequestWithPsd2Response>;
    /**
     * Use Verify search to check the status of past or current verification requests:
     *
     * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
     * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
     *
     * *Note that this endpoint is available by `POST` request as well as `GET`.*
    **/
    VerifySearch(req: operations.VerifySearchRequest, config?: AxiosRequestConfig): Promise<operations.VerifySearchResponse>;
}
export {};
