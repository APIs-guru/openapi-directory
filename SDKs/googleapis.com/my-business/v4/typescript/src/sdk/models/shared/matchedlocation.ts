import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// MatchedLocation
/** 
 * Represents a possible match to a location.
**/
export class MatchedLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=isExactMatch" })
  isExactMatch?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: Location;
}
