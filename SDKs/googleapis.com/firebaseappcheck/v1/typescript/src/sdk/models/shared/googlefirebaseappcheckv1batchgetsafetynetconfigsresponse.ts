import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1SafetyNetConfig } from "./googlefirebaseappcheckv1safetynetconfig";



// GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
/** 
 * Response message for the BatchGetSafetyNetConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1SafetyNetConfig })
  configs?: GoogleFirebaseAppcheckV1SafetyNetConfig[];
}
