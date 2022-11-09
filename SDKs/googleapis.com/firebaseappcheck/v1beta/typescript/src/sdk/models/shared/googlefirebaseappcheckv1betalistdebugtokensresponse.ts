import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaDebugToken } from "./googlefirebaseappcheckv1betadebugtoken";


// GoogleFirebaseAppcheckV1betaListDebugTokensResponse
/** 
 * Response message for the ListDebugTokens method.
**/
export class GoogleFirebaseAppcheckV1betaListDebugTokensResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugTokens", elemType: shared.GoogleFirebaseAppcheckV1betaDebugToken })
  debugTokens?: GoogleFirebaseAppcheckV1betaDebugToken[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
