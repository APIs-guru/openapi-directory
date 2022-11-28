import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class OrderLineItemAdjustment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priceAdjustment" })
  priceAdjustment?: Price;

  @SpeakeasyMetadata({ data: "json, name=taxAdjustment" })
  taxAdjustment?: Price;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
