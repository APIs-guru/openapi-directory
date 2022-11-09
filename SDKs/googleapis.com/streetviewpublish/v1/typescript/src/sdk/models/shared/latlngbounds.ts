import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";
import { LatLng } from "./latlng";


// LatLngBounds
/** 
 * A rectangle in geographical coordinates.
**/
export class LatLngBounds extends SpeakeasyBase {
  @Metadata({ data: "json, name=northeast" })
  northeast?: LatLng;

  @Metadata({ data: "json, name=southwest" })
  southwest?: LatLng;
}
