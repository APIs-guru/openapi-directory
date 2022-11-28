import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebDetectionParams
/** 
 * Parameters for web detection request.
**/
export class WebDetectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeGeoResults" })
  includeGeoResults?: boolean;
}
