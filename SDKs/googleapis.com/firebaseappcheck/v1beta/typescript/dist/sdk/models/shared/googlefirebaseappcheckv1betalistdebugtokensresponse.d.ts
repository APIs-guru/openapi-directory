import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaDebugToken } from "./googlefirebaseappcheckv1betadebugtoken";
/**
 * Response message for the ListDebugTokens method.
**/
export declare class GoogleFirebaseAppcheckV1betaListDebugTokensResponse extends SpeakeasyBase {
    debugTokens?: GoogleFirebaseAppcheckV1betaDebugToken[];
    nextPageToken?: string;
}
