import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1PlayIntegrityConfig } from "./googlefirebaseappcheckv1playintegrityconfig";



// GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
/** 
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1PlayIntegrityConfig })
  configs?: GoogleFirebaseAppcheckV1PlayIntegrityConfig[];
}
