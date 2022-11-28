import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// PointRadius
/** 
 * A radius around a particular point (latitude/longitude).
**/
export class PointRadius extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=radiusKm" })
  radiusKm?: number;
}
