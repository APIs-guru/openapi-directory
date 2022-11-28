import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchedLocation } from "./matchedlocation";



// FindMatchingLocationsResponse
/** 
 * Response message for Locations.FindMatchingLocations.
**/
export class FindMatchingLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchTime" })
  matchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=matchedLocations", elemType: MatchedLocation })
  matchedLocations?: MatchedLocation[];
}
