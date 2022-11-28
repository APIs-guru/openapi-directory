import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1WebDetectionParams
/** 
 * Parameters for web detection request.
**/
export class GoogleCloudVisionV1p2beta1WebDetectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeGeoResults" })
  includeGeoResults?: boolean;
}
