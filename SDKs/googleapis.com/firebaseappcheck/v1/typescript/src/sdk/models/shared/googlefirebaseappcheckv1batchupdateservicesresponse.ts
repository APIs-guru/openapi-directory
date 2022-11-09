import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";


// GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
/** 
 * Response message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=services", elemType: shared.GoogleFirebaseAppcheckV1Service })
  services?: GoogleFirebaseAppcheckV1Service[];
}
