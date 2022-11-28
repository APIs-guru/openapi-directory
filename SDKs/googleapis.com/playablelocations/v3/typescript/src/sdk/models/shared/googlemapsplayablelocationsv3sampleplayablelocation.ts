import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";



// GoogleMapsPlayablelocationsV3SamplePlayableLocation
/** 
 * A geographical point suitable for placing game objects in location-based games.
**/
export class GoogleMapsPlayablelocationsV3SamplePlayableLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=centerPoint" })
  centerPoint?: GoogleTypeLatLng;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=plusCode" })
  plusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=snappedPoint" })
  snappedPoint?: GoogleTypeLatLng;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: string[];
}
