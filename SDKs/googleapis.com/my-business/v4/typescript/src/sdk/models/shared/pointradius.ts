import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";


// PointRadius
/** 
 * A radius around a particular point (latitude/longitude).
**/
export class PointRadius extends SpeakeasyBase {
  @Metadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @Metadata({ data: "json, name=radiusKm" })
  radiusKm?: number;
}
