import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";



// GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
/** 
 * Response message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleFirebaseAppcheckV1betaService })
  services?: GoogleFirebaseAppcheckV1betaService[];
}
