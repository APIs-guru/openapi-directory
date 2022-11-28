import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Response message for Locations.ListLocations.
**/
export declare class ListLocationsResponse extends SpeakeasyBase {
    locations?: Location[];
    nextPageToken?: string;
    totalSize?: number;
}
