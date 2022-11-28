import { SpeakeasyBase } from "../../../internal/utils";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption";
import { ShipmentInvoice } from "./shipmentinvoice";
export declare class OrderinvoicesCreateRefundInvoiceRequest extends SpeakeasyBase {
    invoiceId?: string;
    operationId?: string;
    refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    shipmentInvoices?: ShipmentInvoice[];
}
