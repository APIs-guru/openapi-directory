import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1UpdateServiceRequest } from "./googlefirebaseappcheckv1updateservicerequest";



// GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
/** 
 * Request message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleFirebaseAppcheckV1UpdateServiceRequest })
  requests?: GoogleFirebaseAppcheckV1UpdateServiceRequest[];

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
