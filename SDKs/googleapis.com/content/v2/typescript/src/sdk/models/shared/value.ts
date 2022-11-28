import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// Value
/** 
 * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierRateName" })
  carrierRateName?: string;

  @SpeakeasyMetadata({ data: "json, name=flatRate" })
  flatRate?: Price;

  @SpeakeasyMetadata({ data: "json, name=noShipping" })
  noShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pricePercentage" })
  pricePercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=subtableName" })
  subtableName?: string;
}
