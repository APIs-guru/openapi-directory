import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaPlayIntegrityConfig } from "./googlefirebaseappcheckv1betaplayintegrityconfig";



// GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse
/** 
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaPlayIntegrityConfig })
  configs?: GoogleFirebaseAppcheckV1betaPlayIntegrityConfig[];
}
