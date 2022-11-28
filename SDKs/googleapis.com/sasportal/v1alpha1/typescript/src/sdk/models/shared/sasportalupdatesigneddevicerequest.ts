import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalUpdateSignedDeviceRequest
/** 
 * Request for UpdateSignedDevice.
**/
export class SasPortalUpdateSignedDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encodedDevice" })
  encodedDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=installerId" })
  installerId?: string;
}
