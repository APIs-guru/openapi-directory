import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";
/**
 * Response message for the ListServices method.
**/
export declare class GoogleFirebaseAppcheckV1ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: GoogleFirebaseAppcheckV1Service[];
}
