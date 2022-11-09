import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";


// GoogleFirebaseAppcheckV1ListServicesResponse
/** 
 * Response message for the ListServices method.
**/
export class GoogleFirebaseAppcheckV1ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.GoogleFirebaseAppcheckV1Service })
  services?: GoogleFirebaseAppcheckV1Service[];
}
