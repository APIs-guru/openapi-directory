import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocationList } from "./googlemapsplayablelocationsv3sampleplayablelocationlist";


// GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
/** 
 *  Response for the SamplePlayableLocations method.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationsPerGameObjectType", elemType: shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationList })
  locationsPerGameObjectType?: Map<string, GoogleMapsPlayablelocationsV3SamplePlayableLocationList>;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
