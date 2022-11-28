import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1DeviceCheckConfig } from "./googlefirebaseappcheckv1devicecheckconfig";



// GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
/** 
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GoogleFirebaseAppcheckV1DeviceCheckConfig })
  configs?: GoogleFirebaseAppcheckV1DeviceCheckConfig[];
}
