import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummary } from "./invoicesummary";
import { ShipmentInvoiceLineItemInvoice } from "./shipmentinvoicelineiteminvoice";
export declare class OrderinvoicesCreateChargeInvoiceRequest extends SpeakeasyBase {
    invoiceId?: string;
    invoiceSummary?: InvoiceSummary;
    lineItemInvoices?: ShipmentInvoiceLineItemInvoice[];
    operationId?: string;
    shipmentGroupId?: string;
}
