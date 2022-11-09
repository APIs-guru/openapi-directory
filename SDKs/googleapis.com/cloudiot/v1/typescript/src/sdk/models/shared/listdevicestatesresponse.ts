import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceState } from "./devicestate";


// ListDeviceStatesResponse
/** 
 * Response for `ListDeviceStates`.
**/
export class ListDeviceStatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceStates", elemType: shared.DeviceState })
  deviceStates?: DeviceState[];
}
