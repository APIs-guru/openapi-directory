import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// LocationInfo
/** 
 * Detected entity location information.
**/
export class LocationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latLng" })
  latLng?: LatLng;
}
