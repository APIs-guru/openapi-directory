import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocationList } from "./googlemapsplayablelocationsv3sampleplayablelocationlist";



// GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
/** 
 *  Response for the SamplePlayableLocations method.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationsPerGameObjectType", elemType: GoogleMapsPlayablelocationsV3SamplePlayableLocationList })
  locationsPerGameObjectType?: Map<string, GoogleMapsPlayablelocationsV3SamplePlayableLocationList>;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
