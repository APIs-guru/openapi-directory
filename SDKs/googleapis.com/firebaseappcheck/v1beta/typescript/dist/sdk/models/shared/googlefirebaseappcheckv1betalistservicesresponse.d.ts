import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";
/**
 * Response message for the ListServices method.
**/
export declare class GoogleFirebaseAppcheckV1betaListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: GoogleFirebaseAppcheckV1betaService[];
}
