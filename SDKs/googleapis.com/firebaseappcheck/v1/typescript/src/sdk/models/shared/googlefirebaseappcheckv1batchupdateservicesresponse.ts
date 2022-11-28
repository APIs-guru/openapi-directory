import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";



// GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
/** 
 * Response message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleFirebaseAppcheckV1Service })
  services?: GoogleFirebaseAppcheckV1Service[];
}
