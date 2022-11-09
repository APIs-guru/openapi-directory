import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalCreateSignedDeviceRequest
/** 
 * Request for CreateSignedDevice.
**/
export class SasPortalCreateSignedDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encodedDevice" })
  encodedDevice?: string;

  @Metadata({ data: "json, name=installerId" })
  installerId?: string;
}
