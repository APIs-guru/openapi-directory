import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";



export class OrdersCustomBatchRequestEntryRefundItemItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
