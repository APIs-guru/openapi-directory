import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class OrdersRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Price;

  @SpeakeasyMetadata({ data: "json, name=amountPretax" })
  amountPretax?: Price;

  @SpeakeasyMetadata({ data: "json, name=amountTax" })
  amountTax?: Price;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
