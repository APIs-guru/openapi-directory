import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummary } from "./invoicesummary";
import { ShipmentInvoiceLineItemInvoice } from "./shipmentinvoicelineiteminvoice";



export class OrderinvoicesCreateChargeInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceSummary" })
  invoiceSummary?: InvoiceSummary;

  @SpeakeasyMetadata({ data: "json, name=lineItemInvoices", elemType: ShipmentInvoiceLineItemInvoice })
  lineItemInvoices?: ShipmentInvoiceLineItemInvoice[];

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;
}
