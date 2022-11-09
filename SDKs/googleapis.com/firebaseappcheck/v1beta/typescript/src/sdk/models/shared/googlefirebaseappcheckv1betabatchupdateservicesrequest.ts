import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaUpdateServiceRequest } from "./googlefirebaseappcheckv1betaupdateservicerequest";


// GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
/** 
 * Request message for the BatchUpdateServices method.
**/
export class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleFirebaseAppcheckV1betaUpdateServiceRequest })
  requests?: GoogleFirebaseAppcheckV1betaUpdateServiceRequest[];

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
