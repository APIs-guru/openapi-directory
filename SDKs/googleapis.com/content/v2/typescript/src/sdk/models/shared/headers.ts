import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationIdSet } from "./locationidset";
import { Price } from "./price";
import { Weight } from "./weight";



// Headers
/** 
 * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
**/
export class Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: LocationIdSet })
  locations?: LocationIdSet[];

  @SpeakeasyMetadata({ data: "json, name=numberOfItems" })
  numberOfItems?: string[];

  @SpeakeasyMetadata({ data: "json, name=postalCodeGroupNames" })
  postalCodeGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: Price })
  prices?: Price[];

  @SpeakeasyMetadata({ data: "json, name=weights", elemType: Weight })
  weights?: Weight[];
}
