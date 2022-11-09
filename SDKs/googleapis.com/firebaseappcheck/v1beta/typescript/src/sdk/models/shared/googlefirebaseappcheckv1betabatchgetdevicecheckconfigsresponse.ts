import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1betaDeviceCheckConfig } from "./googlefirebaseappcheckv1betadevicecheckconfig";


// GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
/** 
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
export class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1betaDeviceCheckConfig })
  configs?: GoogleFirebaseAppcheckV1betaDeviceCheckConfig[];
}
