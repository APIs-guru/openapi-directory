import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaAppAttestConfig } from "./googlefirebaseappcheckv1betaappattestconfig";



// GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
/** 
 * Response message for the BatchGetAppAttestConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaAppAttestConfig })
  configs?: GoogleFirebaseAppcheckV1betaAppAttestConfig[];
}
