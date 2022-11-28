import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1DebugToken } from "./googlefirebaseappcheckv1debugtoken";



// GoogleFirebaseAppcheckV1ListDebugTokensResponse
/** 
 * Response message for the ListDebugTokens method.
**/
export class GoogleFirebaseAppcheckV1ListDebugTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugTokens", elemType: GoogleFirebaseAppcheckV1DebugToken })
  debugTokens?: GoogleFirebaseAppcheckV1DebugToken[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
