import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonetaryAmount } from "./monetaryamount";


export class OrdersCustomBatchRequestEntryRefundItemItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: MonetaryAmount;

  @Metadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
