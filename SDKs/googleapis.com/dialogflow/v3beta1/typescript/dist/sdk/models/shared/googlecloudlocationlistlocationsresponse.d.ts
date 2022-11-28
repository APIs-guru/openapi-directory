import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudLocationLocation } from "./googlecloudlocationlocation";
/**
 * The response message for Locations.ListLocations.
**/
export declare class GoogleCloudLocationListLocationsResponse extends SpeakeasyBase {
    locations?: GoogleCloudLocationLocation[];
    nextPageToken?: string;
}
