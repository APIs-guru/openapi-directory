import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// GoogleCloudVisionV1p1beta1LatLongRect
/** 
 * Rectangle determined by min and max `LatLng` pairs.
**/
export class GoogleCloudVisionV1p1beta1LatLongRect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLatLng" })
  maxLatLng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=minLatLng" })
  minLatLng?: LatLng;
}
