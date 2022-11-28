import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocationList } from "./googlemapsplayablelocationsv3sampleplayablelocationlist";
/**
 *  Response for the SamplePlayableLocations method.
**/
export declare class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse extends SpeakeasyBase {
    locationsPerGameObjectType?: Map<string, GoogleMapsPlayablelocationsV3SamplePlayableLocationList>;
    ttl?: string;
}
