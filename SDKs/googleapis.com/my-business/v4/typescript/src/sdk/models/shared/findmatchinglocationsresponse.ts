import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchedLocation } from "./matchedlocation";


// FindMatchingLocationsResponse
/** 
 * Response message for Locations.FindMatchingLocations.
**/
export class FindMatchingLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchTime" })
  matchTime?: string;

  @Metadata({ data: "json, name=matchedLocations", elemType: shared.MatchedLocation })
  matchedLocations?: MatchedLocation[];
}
