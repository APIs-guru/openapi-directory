import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1WebDetectionParams
/** 
 * Parameters for web detection request.
**/
export class GoogleCloudVisionV1p1beta1WebDetectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeGeoResults" })
  includeGeoResults?: boolean;
}
