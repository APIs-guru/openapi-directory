import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";



// GoogleFirebaseAppcheckV1betaListServicesResponse
/** 
 * Response message for the ListServices method.
**/
export class GoogleFirebaseAppcheckV1betaListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleFirebaseAppcheckV1betaService })
  services?: GoogleFirebaseAppcheckV1betaService[];
}
