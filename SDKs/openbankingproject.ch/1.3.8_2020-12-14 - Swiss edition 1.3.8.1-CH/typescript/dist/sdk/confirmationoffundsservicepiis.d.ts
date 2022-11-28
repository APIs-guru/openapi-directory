import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConfirmationOfFundsServicePiis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkAvailabilityOfFunds - Confirmation of funds request
     *
     * Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
     * If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
    **/
    checkAvailabilityOfFunds(req: operations.CheckAvailabilityOfFundsRequest, config?: AxiosRequestConfig): Promise<operations.CheckAvailabilityOfFundsResponse>;
}
