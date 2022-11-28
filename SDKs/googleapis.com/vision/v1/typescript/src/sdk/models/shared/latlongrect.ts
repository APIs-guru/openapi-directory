import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// LatLongRect
/** 
 * Rectangle determined by min and max `LatLng` pairs.
**/
export class LatLongRect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLatLng" })
  maxLatLng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=minLatLng" })
  minLatLng?: LatLng;
}
