import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1DebugToken } from "./googlefirebaseappcheckv1debugtoken";
/**
 * Response message for the ListDebugTokens method.
**/
export declare class GoogleFirebaseAppcheckV1ListDebugTokensResponse extends SpeakeasyBase {
    debugTokens?: GoogleFirebaseAppcheckV1DebugToken[];
    nextPageToken?: string;
}
