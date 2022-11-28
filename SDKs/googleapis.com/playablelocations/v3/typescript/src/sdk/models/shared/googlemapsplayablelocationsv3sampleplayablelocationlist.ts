import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocation } from "./googlemapsplayablelocationsv3sampleplayablelocation";



// GoogleMapsPlayablelocationsV3SamplePlayableLocationList
/** 
 * A list of PlayableLocation objects that satisfies a single Criterion.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: GoogleMapsPlayablelocationsV3SamplePlayableLocation })
  locations?: GoogleMapsPlayablelocationsV3SamplePlayableLocation[];
}
