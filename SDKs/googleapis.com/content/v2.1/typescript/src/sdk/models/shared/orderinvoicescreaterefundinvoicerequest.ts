import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption";
import { ShipmentInvoice } from "./shipmentinvoice";



export class OrderinvoicesCreateRefundInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundOnlyOption" })
  refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;

  @SpeakeasyMetadata({ data: "json, name=returnOption" })
  returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;

  @SpeakeasyMetadata({ data: "json, name=shipmentInvoices", elemType: ShipmentInvoice })
  shipmentInvoices?: ShipmentInvoice[];
}
