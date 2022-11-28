import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://openbanking.org.uk", "https://openbanking.org.uk/open-banking/v3.1/pisp"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createDomesticPaymentConsents - Create Domestic Payment Consents
    **/
    createDomesticPaymentConsents(req: operations.CreateDomesticPaymentConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentConsentsResponse>;
    /**
     * createDomesticPayments - Create Domestic Payments
    **/
    createDomesticPayments(req: operations.CreateDomesticPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentsResponse>;
    /**
     * createDomesticScheduledPaymentConsents - Create Domestic Scheduled Payment Consents
    **/
    createDomesticScheduledPaymentConsents(req: operations.CreateDomesticScheduledPaymentConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentConsentsResponse>;
    /**
     * createDomesticScheduledPayments - Create Domestic Scheduled Payments
    **/
    createDomesticScheduledPayments(req: operations.CreateDomesticScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentsResponse>;
    /**
     * createDomesticStandingOrderConsents - Create Domestic Standing Order Consents
    **/
    createDomesticStandingOrderConsents(req: operations.CreateDomesticStandingOrderConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrderConsentsResponse>;
    /**
     * createDomesticStandingOrders - Create Domestic Standing Orders
    **/
    createDomesticStandingOrders(req: operations.CreateDomesticStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomesticStandingOrdersResponse>;
    /**
     * createFilePaymentConsents - Create File Payment Consents
    **/
    createFilePaymentConsents(req: operations.CreateFilePaymentConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsResponse>;
    /**
     * createFilePaymentConsentsConsentIdFile - Create File Payment Consents
    **/
    createFilePaymentConsentsConsentIdFile(req: operations.CreateFilePaymentConsentsConsentIdFileRequest, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsConsentIdFileResponse>;
    /**
     * createFilePayments - Create File Payments
    **/
    createFilePayments(req: operations.CreateFilePaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentsResponse>;
    /**
     * createInternationalPaymentConsents - Create International Payment Consents
    **/
    createInternationalPaymentConsents(req: operations.CreateInternationalPaymentConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentConsentsResponse>;
    /**
     * createInternationalPayments - Create International Payments
    **/
    createInternationalPayments(req: operations.CreateInternationalPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentsResponse>;
    /**
     * createInternationalScheduledPaymentConsents - Create International Scheduled Payment Consents
    **/
    createInternationalScheduledPaymentConsents(req: operations.CreateInternationalScheduledPaymentConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentConsentsResponse>;
    /**
     * createInternationalScheduledPayments - Create International Scheduled Payments
    **/
    createInternationalScheduledPayments(req: operations.CreateInternationalScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentsResponse>;
    /**
     * createInternationalStandingOrderConsents - Create International Standing Order Consents
    **/
    createInternationalStandingOrderConsents(req: operations.CreateInternationalStandingOrderConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrderConsentsResponse>;
    /**
     * createInternationalStandingOrders - Create International Standing Orders
    **/
    createInternationalStandingOrders(req: operations.CreateInternationalStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrdersResponse>;
    /**
     * getDomesticPaymentConsentsConsentId - Get Domestic Payment Consents
    **/
    getDomesticPaymentConsentsConsentId(req: operations.GetDomesticPaymentConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentConsentsConsentIdResponse>;
    /**
     * getDomesticPaymentConsentsConsentIdFundsConfirmation - Get Domestic Payment Consents Funds Confirmation
    **/
    getDomesticPaymentConsentsConsentIdFundsConfirmation(req: operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * getDomesticPaymentsDomesticPaymentId - Get Domestic Payments
    **/
    getDomesticPaymentsDomesticPaymentId(req: operations.GetDomesticPaymentsDomesticPaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentsDomesticPaymentIdResponse>;
    /**
     * getDomesticPaymentsDomesticPaymentIdPaymentDetails - Get Payment Details
    **/
    getDomesticPaymentsDomesticPaymentIdPaymentDetails(req: operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse>;
    /**
     * getDomesticScheduledPaymentConsentsConsentId - Get Domestic Scheduled Payment Consents
    **/
    getDomesticScheduledPaymentConsentsConsentId(req: operations.GetDomesticScheduledPaymentConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentConsentsConsentIdResponse>;
    /**
     * getDomesticScheduledPaymentsDomesticScheduledPaymentId - Get Domestic Scheduled Payments
    **/
    getDomesticScheduledPaymentsDomesticScheduledPaymentId(req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse>;
    /**
     * getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails - Get Payment Details
    **/
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse>;
    /**
     * getDomesticStandingOrderConsentsConsentId - Get Domestic Standing Order Consents
    **/
    getDomesticStandingOrderConsentsConsentId(req: operations.GetDomesticStandingOrderConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrderConsentsConsentIdResponse>;
    /**
     * getDomesticStandingOrdersDomesticStandingOrderId - Get Domestic Standing Orders
    **/
    getDomesticStandingOrdersDomesticStandingOrderId(req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdResponse>;
    /**
     * getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails - Get Payment Details
    **/
    getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse>;
    /**
     * getFilePaymentConsentsConsentId - Get File Payment Consents
    **/
    getFilePaymentConsentsConsentId(req: operations.GetFilePaymentConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentConsentsConsentIdResponse>;
    /**
     * getFilePaymentConsentsConsentIdFile - Get File Payment Consents
    **/
    getFilePaymentConsentsConsentIdFile(req: operations.GetFilePaymentConsentsConsentIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentConsentsConsentIdFileResponse>;
    /**
     * getFilePaymentsFilePaymentId - Get File Payments
    **/
    getFilePaymentsFilePaymentId(req: operations.GetFilePaymentsFilePaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdResponse>;
    /**
     * getFilePaymentsFilePaymentIdPaymentDetails - Get Payment Details
    **/
    getFilePaymentsFilePaymentIdPaymentDetails(req: operations.GetFilePaymentsFilePaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdPaymentDetailsResponse>;
    /**
     * getFilePaymentsFilePaymentIdReportFile - Get File Payments
    **/
    getFilePaymentsFilePaymentIdReportFile(req: operations.GetFilePaymentsFilePaymentIdReportFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdReportFileResponse>;
    /**
     * getInternationalPaymentConsentsConsentId - Get International Payment Consents
    **/
    getInternationalPaymentConsentsConsentId(req: operations.GetInternationalPaymentConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentConsentsConsentIdResponse>;
    /**
     * getInternationalPaymentConsentsConsentIdFundsConfirmation - Get International Payment Consents Funds Confirmation
    **/
    getInternationalPaymentConsentsConsentIdFundsConfirmation(req: operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * getInternationalPaymentsInternationalPaymentId - Get International Payments
    **/
    getInternationalPaymentsInternationalPaymentId(req: operations.GetInternationalPaymentsInternationalPaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentsInternationalPaymentIdResponse>;
    /**
     * getInternationalPaymentsInternationalPaymentIdPaymentDetails - Get Payment Details
    **/
    getInternationalPaymentsInternationalPaymentIdPaymentDetails(req: operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse>;
    /**
     * getInternationalScheduledPaymentConsentsConsentId - Get International Scheduled Payment Consents
    **/
    getInternationalScheduledPaymentConsentsConsentId(req: operations.GetInternationalScheduledPaymentConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdResponse>;
    /**
     * getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation - Get International Scheduled Payment Consents Funds Confirmation
    **/
    getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(req: operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * getInternationalScheduledPaymentsInternationalScheduledPaymentId - Get International Scheduled Payments
    **/
    getInternationalScheduledPaymentsInternationalScheduledPaymentId(req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse>;
    /**
     * getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails - Get Payment Details
    **/
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse>;
    /**
     * getInternationalStandingOrderConsentsConsentId - Get International Standing Order Consents
    **/
    getInternationalStandingOrderConsentsConsentId(req: operations.GetInternationalStandingOrderConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrderConsentsConsentIdResponse>;
    /**
     * getInternationalStandingOrdersInternationalStandingOrderPaymentId - Get International Standing Orders
    **/
    getInternationalStandingOrdersInternationalStandingOrderPaymentId(req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse>;
    /**
     * getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails - Get Payment Details
    **/
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse>;
}
export {};
