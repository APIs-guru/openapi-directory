import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";



// GoogleFirebaseAppcheckV1ListServicesResponse
/** 
 * Response message for the ListServices method.
**/
export class GoogleFirebaseAppcheckV1ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleFirebaseAppcheckV1Service })
  services?: GoogleFirebaseAppcheckV1Service[];
}
