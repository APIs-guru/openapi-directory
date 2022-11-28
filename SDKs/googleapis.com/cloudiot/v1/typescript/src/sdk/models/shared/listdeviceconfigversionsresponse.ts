import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceConfig } from "./deviceconfig";



// ListDeviceConfigVersionsResponse
/** 
 * Response for `ListDeviceConfigVersions`.
**/
export class ListDeviceConfigVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceConfigs", elemType: DeviceConfig })
  deviceConfigs?: DeviceConfig[];
}
