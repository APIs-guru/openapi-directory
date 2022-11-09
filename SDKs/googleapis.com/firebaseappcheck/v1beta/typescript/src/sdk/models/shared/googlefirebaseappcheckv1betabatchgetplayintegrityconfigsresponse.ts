import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaPlayIntegrityConfig } from "./googlefirebaseappcheckv1betaplayintegrityconfig";


// GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse
/** 
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaPlayIntegrityConfig })
  configs?: GoogleFirebaseAppcheckV1betaPlayIntegrityConfig[];
}
