import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FraudManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * networkUnblock - Request a network unblock
     *
     * Request to unblock a network that has been blocked due to potential fraud detection
     * <div class="Vlt-callout Vlt-callout--critical">
     *   <div class="Vlt-callout__content">
     *     <h4>Network Unblock is switched off by default.</h4>
     *     Please contact Sales to enable the Network Unblock API for your account.
     *   </div>
     * </div>
    **/
    networkUnblock(req: operations.NetworkUnblockRequest, config?: AxiosRequestConfig): Promise<operations.NetworkUnblockResponse>;
}
