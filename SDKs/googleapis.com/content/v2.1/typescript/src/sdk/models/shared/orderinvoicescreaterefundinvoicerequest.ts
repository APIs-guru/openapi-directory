import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption";
import { ShipmentInvoice } from "./shipmentinvoice";


export class OrderinvoicesCreateRefundInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=refundOnlyOption" })
  refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;

  @Metadata({ data: "json, name=returnOption" })
  returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;

  @Metadata({ data: "json, name=shipmentInvoices", elemType: shared.ShipmentInvoice })
  shipmentInvoices?: ShipmentInvoice[];
}
