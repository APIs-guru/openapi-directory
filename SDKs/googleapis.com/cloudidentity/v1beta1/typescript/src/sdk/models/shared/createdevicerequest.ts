import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInput } from "./device";



// CreateDeviceRequestInput
/** 
 * Request message for creating a Company Owned device.
**/
export class CreateDeviceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceInput;
}
