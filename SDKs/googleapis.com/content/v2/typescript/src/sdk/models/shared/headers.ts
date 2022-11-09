import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationIdSet } from "./locationidset";
import { Price } from "./price";
import { Weight } from "./weight";


// Headers
/** 
 * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
**/
export class Headers extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.LocationIdSet })
  locations?: LocationIdSet[];

  @Metadata({ data: "json, name=numberOfItems" })
  numberOfItems?: string[];

  @Metadata({ data: "json, name=postalCodeGroupNames" })
  postalCodeGroupNames?: string[];

  @Metadata({ data: "json, name=prices", elemType: shared.Price })
  prices?: Price[];

  @Metadata({ data: "json, name=weights", elemType: shared.Weight })
  weights?: Weight[];
}
