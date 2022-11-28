import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentOrdersAcknowledge - Marks an order as acknowledged.
    **/
    contentOrdersAcknowledge(req: operations.ContentOrdersAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersAcknowledgeResponse>;
    /**
     * contentOrdersAdvancetestorder - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
    **/
    contentOrdersAdvancetestorder(req: operations.ContentOrdersAdvancetestorderRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersAdvancetestorderResponse>;
    /**
     * contentOrdersCancel - Cancels all line items in an order, making a full refund.
    **/
    contentOrdersCancel(req: operations.ContentOrdersCancelRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCancelResponse>;
    /**
     * contentOrdersCancellineitem - Cancels a line item, making a full refund.
    **/
    contentOrdersCancellineitem(req: operations.ContentOrdersCancellineitemRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCancellineitemResponse>;
    /**
     * contentOrdersCanceltestorderbycustomer - Sandbox only. Cancels a test order for customer-initiated cancellation.
    **/
    contentOrdersCanceltestorderbycustomer(req: operations.ContentOrdersCanceltestorderbycustomerRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCanceltestorderbycustomerResponse>;
    /**
     * contentOrdersCreatetestorder - Sandbox only. Creates a test order.
    **/
    contentOrdersCreatetestorder(req: operations.ContentOrdersCreatetestorderRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCreatetestorderResponse>;
    /**
     * contentOrdersCreatetestreturn - Sandbox only. Creates a test return.
    **/
    contentOrdersCreatetestreturn(req: operations.ContentOrdersCreatetestreturnRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCreatetestreturnResponse>;
    /**
     * contentOrdersCustombatch - Retrieves or modifies multiple orders in a single request.
    **/
    contentOrdersCustombatch(req: operations.ContentOrdersCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCustombatchResponse>;
    /**
     * contentOrdersGet - Retrieves an order from your Merchant Center account.
    **/
    contentOrdersGet(req: operations.ContentOrdersGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGetResponse>;
    /**
     * contentOrdersGetbymerchantorderid - Retrieves an order using merchant order ID.
    **/
    contentOrdersGetbymerchantorderid(req: operations.ContentOrdersGetbymerchantorderidRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGetbymerchantorderidResponse>;
    /**
     * contentOrdersGettestordertemplate - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
    **/
    contentOrdersGettestordertemplate(req: operations.ContentOrdersGettestordertemplateRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGettestordertemplateResponse>;
    /**
     * contentOrdersInstorerefundlineitem - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
    **/
    contentOrdersInstorerefundlineitem(req: operations.ContentOrdersInstorerefundlineitemRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersInstorerefundlineitemResponse>;
    /**
     * contentOrdersList - Lists the orders in your Merchant Center account.
    **/
    contentOrdersList(req: operations.ContentOrdersListRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersListResponse>;
    /**
     * contentOrdersRefund - Deprecated, please use returnRefundLineItem instead.
    **/
    contentOrdersRefund(req: operations.ContentOrdersRefundRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersRefundResponse>;
    /**
     * contentOrdersRejectreturnlineitem - Rejects return on an line item.
    **/
    contentOrdersRejectreturnlineitem(req: operations.ContentOrdersRejectreturnlineitemRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersRejectreturnlineitemResponse>;
    /**
     * contentOrdersReturnlineitem - Returns a line item.
    **/
    contentOrdersReturnlineitem(req: operations.ContentOrdersReturnlineitemRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersReturnlineitemResponse>;
    /**
     * contentOrdersReturnrefundlineitem - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
    **/
    contentOrdersReturnrefundlineitem(req: operations.ContentOrdersReturnrefundlineitemRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersReturnrefundlineitemResponse>;
    /**
     * contentOrdersSetlineitemmetadata - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
    **/
    contentOrdersSetlineitemmetadata(req: operations.ContentOrdersSetlineitemmetadataRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersSetlineitemmetadataResponse>;
    /**
     * contentOrdersShiplineitems - Marks line item(s) as shipped.
    **/
    contentOrdersShiplineitems(req: operations.ContentOrdersShiplineitemsRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersShiplineitemsResponse>;
    /**
     * contentOrdersUpdatelineitemshippingdetails - Updates ship by and delivery by dates for a line item.
    **/
    contentOrdersUpdatelineitemshippingdetails(req: operations.ContentOrdersUpdatelineitemshippingdetailsRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdatelineitemshippingdetailsResponse>;
    /**
     * contentOrdersUpdatemerchantorderid - Updates the merchant order ID for a given order.
    **/
    contentOrdersUpdatemerchantorderid(req: operations.ContentOrdersUpdatemerchantorderidRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdatemerchantorderidResponse>;
    /**
     * contentOrdersUpdateshipment - Updates a shipment's status, carrier, and/or tracking ID.
    **/
    contentOrdersUpdateshipment(req: operations.ContentOrdersUpdateshipmentRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdateshipmentResponse>;
}
