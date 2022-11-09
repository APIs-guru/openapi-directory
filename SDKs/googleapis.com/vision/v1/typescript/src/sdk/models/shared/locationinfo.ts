import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";


// LocationInfo
/** 
 * Detected entity location information.
**/
export class LocationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=latLng" })
  latLng?: LatLng;
}
