import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class OrdersCustomBatchRequestEntryRefundItemShipping extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;
}
