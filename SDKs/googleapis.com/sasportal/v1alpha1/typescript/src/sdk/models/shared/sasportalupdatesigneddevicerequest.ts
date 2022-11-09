import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalUpdateSignedDeviceRequest
/** 
 * Request for UpdateSignedDevice.
**/
export class SasPortalUpdateSignedDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encodedDevice" })
  encodedDevice?: string;

  @Metadata({ data: "json, name=installerId" })
  installerId?: string;
}
