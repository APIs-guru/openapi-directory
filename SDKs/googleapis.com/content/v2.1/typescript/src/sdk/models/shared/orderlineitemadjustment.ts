import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


export class OrderLineItemAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=priceAdjustment" })
  priceAdjustment?: Price;

  @Metadata({ data: "json, name=taxAdjustment" })
  taxAdjustment?: Price;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
