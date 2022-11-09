import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1UpdateServiceRequest } from "./googlefirebaseappcheckv1updateservicerequest";


// GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
/** 
 * Request message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleFirebaseAppcheckV1UpdateServiceRequest })
  requests?: GoogleFirebaseAppcheckV1UpdateServiceRequest[];

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
