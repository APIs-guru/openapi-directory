import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priceAmount" })
  priceAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: Price;
}
