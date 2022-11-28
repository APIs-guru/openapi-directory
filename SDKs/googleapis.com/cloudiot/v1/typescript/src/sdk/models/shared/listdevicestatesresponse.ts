import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceState } from "./devicestate";



// ListDeviceStatesResponse
/** 
 * Response for `ListDeviceStates`.
**/
export class ListDeviceStatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceStates", elemType: DeviceState })
  deviceStates?: DeviceState[];
}
