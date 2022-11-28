import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedLocation } from "./matchedlocation";
/**
 * Response message for Locations.FindMatchingLocations.
**/
export declare class FindMatchingLocationsResponse extends SpeakeasyBase {
    matchTime?: string;
    matchedLocations?: MatchedLocation[];
}
