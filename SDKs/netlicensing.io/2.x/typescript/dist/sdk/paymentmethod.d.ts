import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentMethod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPaymentMethod - Get Payment Method
     *
     * Return a Payment Method info by 'paymentMethodNumber'
    **/
    getPaymentMethod(req: operations.GetPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodResponse>;
    /**
     * listPaymentMethods - List Payment Methods
     *
     * Return a list of all Payment Methods for the current Vendor
    **/
    listPaymentMethods(req: operations.ListPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentMethodsResponse>;
    /**
     * updatePaymentMethod - Update Payment Method
     *
     * Sets the provided properties to a Payment Method. Return an updated Payment Method
    **/
    updatePaymentMethod(req: operations.UpdatePaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentMethodResponse>;
}
