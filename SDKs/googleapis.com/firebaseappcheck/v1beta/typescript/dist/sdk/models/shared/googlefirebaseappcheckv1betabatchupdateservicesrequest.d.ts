import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaUpdateServiceRequest } from "./googlefirebaseappcheckv1betaupdateservicerequest";
/**
 * Request message for the BatchUpdateServices method.
**/
export declare class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest extends SpeakeasyBase {
    requests?: GoogleFirebaseAppcheckV1betaUpdateServiceRequest[];
    updateMask?: string;
}
