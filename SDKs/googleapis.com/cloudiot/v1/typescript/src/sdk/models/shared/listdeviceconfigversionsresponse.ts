import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceConfig } from "./deviceconfig";


// ListDeviceConfigVersionsResponse
/** 
 * Response for `ListDeviceConfigVersions`.
**/
export class ListDeviceConfigVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceConfigs", elemType: shared.DeviceConfig })
  deviceConfigs?: DeviceConfig[];
}
