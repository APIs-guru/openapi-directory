import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1DeviceCheckConfig } from "./googlefirebaseappcheckv1devicecheckconfig";


// GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
/** 
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1DeviceCheckConfig })
  configs?: GoogleFirebaseAppcheckV1DeviceCheckConfig[];
}
