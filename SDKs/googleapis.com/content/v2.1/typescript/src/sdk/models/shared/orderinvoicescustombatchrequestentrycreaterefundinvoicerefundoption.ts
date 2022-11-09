import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
