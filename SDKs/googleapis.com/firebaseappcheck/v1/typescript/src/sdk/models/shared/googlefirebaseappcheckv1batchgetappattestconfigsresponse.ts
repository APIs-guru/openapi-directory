import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1AppAttestConfig } from "./googlefirebaseappcheckv1appattestconfig";


// GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
/** 
 * Response message for the BatchGetAppAttestConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1AppAttestConfig })
  configs?: GoogleFirebaseAppcheckV1AppAttestConfig[];
}
