import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1SafetyNetConfig } from "./googlefirebaseappcheckv1safetynetconfig";


// GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
/** 
 * Response message for the BatchGetSafetyNetConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1SafetyNetConfig })
  configs?: GoogleFirebaseAppcheckV1SafetyNetConfig[];
}
