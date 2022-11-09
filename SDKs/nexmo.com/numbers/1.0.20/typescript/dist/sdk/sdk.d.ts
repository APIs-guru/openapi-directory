import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Request to purchase a specific inbound number.
    **/
    BuyANumber(req: operations.BuyANumberRequest, config?: AxiosRequestConfig): Promise<operations.BuyANumberResponse>;
    /**
     * Cancel your subscription for a specific inbound number.
    **/
    CancelANumber(req: operations.CancelANumberRequest, config?: AxiosRequestConfig): Promise<operations.CancelANumberResponse>;
    /**
     * Retrieve inbound numbers that are available for the specified country.
    **/
    GetAvailableNumbers(req: operations.GetAvailableNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableNumbersResponse>;
    /**
     * Retrieve all the inbound numbers associated with your Vonage account.
    **/
    GetOwnedNumbers(req: operations.GetOwnedNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnedNumbersResponse>;
    /**
     * Change the behaviour of a number that you own.
    **/
    UpdateANumber(req: operations.UpdateANumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateANumberResponse>;
}
export {};
