import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";



// GoogleFirebaseAppcheckV1UpdateServiceRequest
/** 
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: GoogleFirebaseAppcheckV1Service;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
