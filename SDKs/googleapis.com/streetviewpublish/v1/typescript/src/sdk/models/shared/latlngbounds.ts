import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// LatLngBounds
/** 
 * A rectangle in geographical coordinates.
**/
export class LatLngBounds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=northeast" })
  northeast?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=southwest" })
  southwest?: LatLng;
}
