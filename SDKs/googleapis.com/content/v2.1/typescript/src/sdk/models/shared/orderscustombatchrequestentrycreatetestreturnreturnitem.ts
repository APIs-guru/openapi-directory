import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCustomBatchRequestEntryCreateTestReturnReturnItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
