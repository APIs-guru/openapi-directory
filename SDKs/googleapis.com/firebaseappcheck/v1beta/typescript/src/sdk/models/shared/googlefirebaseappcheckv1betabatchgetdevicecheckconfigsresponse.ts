import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaDeviceCheckConfig } from "./googlefirebaseappcheckv1betadevicecheckconfig";



// GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
/** 
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1betaDeviceCheckConfig })
  configs?: GoogleFirebaseAppcheckV1betaDeviceCheckConfig[];
}
