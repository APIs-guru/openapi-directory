import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseAppcheckV1UpdateServiceRequest } from "./googlefirebaseappcheckv1updateservicerequest";
/**
 * Request message for the BatchUpdateServices method.
**/
export declare class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest extends SpeakeasyBase {
    requests?: GoogleFirebaseAppcheckV1UpdateServiceRequest[];
    updateMask?: string;
}
