import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
