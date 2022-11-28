import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
