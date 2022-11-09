import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";
import { LatLng } from "./latlng";


// GoogleCloudVisionV1p1beta1LatLongRect
/** 
 * Rectangle determined by min and max `LatLng` pairs.
**/
export class GoogleCloudVisionV1p1beta1LatLongRect extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLatLng" })
  maxLatLng?: LatLng;

  @Metadata({ data: "json, name=minLatLng" })
  minLatLng?: LatLng;
}
