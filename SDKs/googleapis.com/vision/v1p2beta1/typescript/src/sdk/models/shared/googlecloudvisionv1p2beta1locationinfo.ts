import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// GoogleCloudVisionV1p2beta1LocationInfo
/** 
 * Detected entity location information.
**/
export class GoogleCloudVisionV1p2beta1LocationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latLng" })
  latLng?: LatLng;
}
