import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * verifyRequest - Request a Verification
     *
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
    verifyRequest(req: operations.VerifyRequestRequest, config?: AxiosRequestConfig): Promise<operations.VerifyRequestResponse>;
}
