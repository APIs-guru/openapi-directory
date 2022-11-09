import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";


// GoogleFirebaseAppcheckV1UpdateServiceRequest
/** 
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1UpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: GoogleFirebaseAppcheckV1Service;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
