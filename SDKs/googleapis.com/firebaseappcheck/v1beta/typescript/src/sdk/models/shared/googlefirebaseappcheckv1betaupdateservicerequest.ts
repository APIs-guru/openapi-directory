import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";


// GoogleFirebaseAppcheckV1betaUpdateServiceRequest
/** 
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1betaUpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: GoogleFirebaseAppcheckV1betaService;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
