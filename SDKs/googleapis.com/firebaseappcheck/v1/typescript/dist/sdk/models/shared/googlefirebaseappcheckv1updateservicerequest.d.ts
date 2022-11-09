import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";
/**
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
export declare class GoogleFirebaseAppcheckV1UpdateServiceRequest extends SpeakeasyBase {
    service?: GoogleFirebaseAppcheckV1Service;
    updateMask?: string;
}
