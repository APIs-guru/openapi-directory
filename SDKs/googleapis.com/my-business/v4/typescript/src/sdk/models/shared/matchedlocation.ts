import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// MatchedLocation
/** 
 * Represents a possible match to a location.
**/
export class MatchedLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isExactMatch" })
  isExactMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
