import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaAppAttestConfig } from "./googlefirebaseappcheckv1betaappattestconfig";


// GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
/** 
 * Response message for the BatchGetAppAttestConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaAppAttestConfig })
  configs?: GoogleFirebaseAppcheckV1betaAppAttestConfig[];
}
