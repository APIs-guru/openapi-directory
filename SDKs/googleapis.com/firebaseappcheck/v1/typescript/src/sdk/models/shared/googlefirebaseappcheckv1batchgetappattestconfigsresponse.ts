import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1AppAttestConfig } from "./googlefirebaseappcheckv1appattestconfig";



// GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
/** 
 * Response message for the BatchGetAppAttestConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1AppAttestConfig })
  configs?: GoogleFirebaseAppcheckV1AppAttestConfig[];
}
