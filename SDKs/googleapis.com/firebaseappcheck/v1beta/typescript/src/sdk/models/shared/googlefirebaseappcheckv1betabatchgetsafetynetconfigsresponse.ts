import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaSafetyNetConfig } from "./googlefirebaseappcheckv1betasafetynetconfig";


// GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse
/** 
 * Response message for the BatchGetSafetyNetConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaSafetyNetConfig })
  configs?: GoogleFirebaseAppcheckV1betaSafetyNetConfig[];
}
