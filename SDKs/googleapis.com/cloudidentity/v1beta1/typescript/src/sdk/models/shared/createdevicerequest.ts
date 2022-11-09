import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";


// CreateDeviceRequest
/** 
 * Request message for creating a Company Owned device.
**/
export class CreateDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: Device;
}
