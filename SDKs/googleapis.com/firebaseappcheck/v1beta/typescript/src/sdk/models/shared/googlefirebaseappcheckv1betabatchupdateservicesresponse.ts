import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";


// GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
/** 
 * Response message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=services", elemType: shared.GoogleFirebaseAppcheckV1betaService })
  services?: GoogleFirebaseAppcheckV1betaService[];
}
