import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceInput } from "./sasportaldevice";



// SasPortalSignDeviceRequestInput
/** 
 * Request for SignDevice.
**/
export class SasPortalSignDeviceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: SasPortalDeviceInput;
}
