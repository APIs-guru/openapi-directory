import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebDetectionParams
/** 
 * Parameters for web detection request.
**/
export class WebDetectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeGeoResults" })
  includeGeoResults?: boolean;
}
