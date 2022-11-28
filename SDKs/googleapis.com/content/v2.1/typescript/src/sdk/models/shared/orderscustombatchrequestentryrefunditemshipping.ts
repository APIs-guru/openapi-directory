import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class OrdersCustomBatchRequestEntryRefundItemShipping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Price;

  @SpeakeasyMetadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;
}
