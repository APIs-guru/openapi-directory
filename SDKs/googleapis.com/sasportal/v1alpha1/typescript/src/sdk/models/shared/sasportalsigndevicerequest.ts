import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalDevice } from "./sasportaldevice";


// SasPortalSignDeviceRequest
/** 
 * Request for SignDevice.
**/
export class SasPortalSignDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: SasPortalDevice;
}
