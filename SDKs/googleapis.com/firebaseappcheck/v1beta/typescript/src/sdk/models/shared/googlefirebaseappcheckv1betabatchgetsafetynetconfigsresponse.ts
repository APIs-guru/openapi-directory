import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaSafetyNetConfig } from "./googlefirebaseappcheckv1betasafetynetconfig";



// GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse
/** 
 * Response message for the BatchGetSafetyNetConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaSafetyNetConfig })
  configs?: GoogleFirebaseAppcheckV1betaSafetyNetConfig[];
}
