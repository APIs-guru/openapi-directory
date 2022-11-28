import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * The response message for Locations.ListLocations.
**/
export declare class ListLocationsResponse extends SpeakeasyBase {
    locations?: Location[];
    nextPageToken?: string;
}
