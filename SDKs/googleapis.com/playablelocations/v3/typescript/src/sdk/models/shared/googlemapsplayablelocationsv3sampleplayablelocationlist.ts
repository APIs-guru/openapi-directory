import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocation } from "./googlemapsplayablelocationsv3sampleplayablelocation";


// GoogleMapsPlayablelocationsV3SamplePlayableLocationList
/** 
 * A list of PlayableLocation objects that satisfies a single Criterion.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.GoogleMapsPlayablelocationsV3SamplePlayableLocation })
  locations?: GoogleMapsPlayablelocationsV3SamplePlayableLocation[];
}
