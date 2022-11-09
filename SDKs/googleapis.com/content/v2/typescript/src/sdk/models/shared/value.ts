import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// Value
/** 
 * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierRateName" })
  carrierRateName?: string;

  @Metadata({ data: "json, name=flatRate" })
  flatRate?: Price;

  @Metadata({ data: "json, name=noShipping" })
  noShipping?: boolean;

  @Metadata({ data: "json, name=pricePercentage" })
  pricePercentage?: string;

  @Metadata({ data: "json, name=subtableName" })
  subtableName?: string;
}
