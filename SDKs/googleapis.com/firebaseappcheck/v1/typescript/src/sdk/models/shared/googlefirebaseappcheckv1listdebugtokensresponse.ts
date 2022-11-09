import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1DebugToken } from "./googlefirebaseappcheckv1debugtoken";


// GoogleFirebaseAppcheckV1ListDebugTokensResponse
/** 
 * Response message for the ListDebugTokens method.
**/
export class GoogleFirebaseAppcheckV1ListDebugTokensResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugTokens", elemType: shared.GoogleFirebaseAppcheckV1DebugToken })
  debugTokens?: GoogleFirebaseAppcheckV1DebugToken[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
