import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class OrdersCustomBatchRequestEntryInStoreRefundLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountPretax" })
  amountPretax?: Price;

  @SpeakeasyMetadata({ data: "json, name=amountTax" })
  amountTax?: Price;

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
