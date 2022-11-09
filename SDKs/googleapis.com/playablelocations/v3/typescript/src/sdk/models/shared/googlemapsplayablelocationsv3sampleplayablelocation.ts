import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleTypeLatLng } from "./googletypelatlng";


// GoogleMapsPlayablelocationsV3SamplePlayableLocation
/** 
 * A geographical point suitable for placing game objects in location-based games.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=centerPoint" })
  centerPoint?: GoogleTypeLatLng;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=plusCode" })
  plusCode?: string;

  @Metadata({ data: "json, name=snappedPoint" })
  snappedPoint?: GoogleTypeLatLng;

  @Metadata({ data: "json, name=types" })
  types?: string[];
}
