import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";
import { Price } from "./price";


export class OrdersCustomBatchRequestEntryRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=amountPretax" })
  amountPretax?: Price;

  @Metadata({ data: "json, name=amountTax" })
  amountTax?: Price;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
