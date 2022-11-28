import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";



export class OrdersRefundOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
