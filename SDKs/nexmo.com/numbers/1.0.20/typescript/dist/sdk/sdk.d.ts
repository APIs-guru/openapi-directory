import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://rest.nexmo.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * buyANumber - Buy a number
     *
     * Request to purchase a specific inbound number.
    **/
    buyANumber(req: operations.BuyANumberRequest, config?: AxiosRequestConfig): Promise<operations.BuyANumberResponse>;
    /**
     * cancelANumber - Cancel a number
     *
     * Cancel your subscription for a specific inbound number.
    **/
    cancelANumber(req: operations.CancelANumberRequest, config?: AxiosRequestConfig): Promise<operations.CancelANumberResponse>;
    /**
     * getAvailableNumbers - Search available numbers
     *
     * Retrieve inbound numbers that are available for the specified country.
    **/
    getAvailableNumbers(req: operations.GetAvailableNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableNumbersResponse>;
    /**
     * getOwnedNumbers - List the numbers you own
     *
     * Retrieve all the inbound numbers associated with your Vonage account.
    **/
    getOwnedNumbers(req: operations.GetOwnedNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnedNumbersResponse>;
    /**
     * updateANumber - Update a number
     *
     * Change the behaviour of a number that you own.
    **/
    updateANumber(req: operations.UpdateANumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateANumberResponse>;
}
export {};
