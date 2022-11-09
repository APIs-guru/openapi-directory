import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceSummary } from "./invoicesummary";
import { ShipmentInvoiceLineItemInvoice } from "./shipmentinvoicelineiteminvoice";


export class ShipmentInvoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoiceSummary" })
  invoiceSummary?: InvoiceSummary;

  @Metadata({ data: "json, name=lineItemInvoices", elemType: shared.ShipmentInvoiceLineItemInvoice })
  lineItemInvoices?: ShipmentInvoiceLineItemInvoice[];

  @Metadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;
}
