import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaUpdateServiceRequest } from "./googlefirebaseappcheckv1betaupdateservicerequest";



// GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
/** 
 * Request message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleFirebaseAppcheckV1betaUpdateServiceRequest })
  requests?: GoogleFirebaseAppcheckV1betaUpdateServiceRequest[];

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
