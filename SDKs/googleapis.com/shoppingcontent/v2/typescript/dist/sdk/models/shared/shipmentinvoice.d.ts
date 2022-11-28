import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummary } from "./invoicesummary";
import { ShipmentInvoiceLineItemInvoice } from "./shipmentinvoicelineiteminvoice";
export declare class ShipmentInvoice extends SpeakeasyBase {
    invoiceSummary?: InvoiceSummary;
    lineItemInvoices?: ShipmentInvoiceLineItemInvoice[];
    shipmentGroupId?: string;
}
