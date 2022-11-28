import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaDebugToken } from "./googlefirebaseappcheckv1betadebugtoken";



// GoogleFirebaseAppcheckV1betaListDebugTokensResponse
/** 
 * Response message for the ListDebugTokens method.
**/
export class GoogleFirebaseAppcheckV1betaListDebugTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugTokens", elemType: GoogleFirebaseAppcheckV1betaDebugToken })
  debugTokens?: GoogleFirebaseAppcheckV1betaDebugToken[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
