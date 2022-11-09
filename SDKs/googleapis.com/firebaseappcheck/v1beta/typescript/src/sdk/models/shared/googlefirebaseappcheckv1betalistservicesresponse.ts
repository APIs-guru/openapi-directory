import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";


// GoogleFirebaseAppcheckV1betaListServicesResponse
/** 
 * Response message for the ListServices method.
**/
export class GoogleFirebaseAppcheckV1betaListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.GoogleFirebaseAppcheckV1betaService })
  services?: GoogleFirebaseAppcheckV1betaService[];
}
