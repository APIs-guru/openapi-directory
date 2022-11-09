import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=priceAmount" })
  priceAmount?: Price;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: Price;
}
