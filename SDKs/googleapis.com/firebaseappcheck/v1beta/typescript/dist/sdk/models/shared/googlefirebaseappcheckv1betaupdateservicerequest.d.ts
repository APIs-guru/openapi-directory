import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";
/**
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
export declare class GoogleFirebaseAppcheckV1betaUpdateServiceRequest extends SpeakeasyBase {
    service?: GoogleFirebaseAppcheckV1betaService;
    updateMask?: string;
}
