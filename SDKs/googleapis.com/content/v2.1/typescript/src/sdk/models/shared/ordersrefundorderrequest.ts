import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonetaryAmount } from "./monetaryamount";


export class OrdersRefundOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: MonetaryAmount;

  @Metadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
