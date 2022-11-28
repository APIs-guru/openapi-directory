import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCustomBatchRequestEntryRejectReturnLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
