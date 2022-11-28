import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalCreateSignedDeviceRequest
/** 
 * Request for CreateSignedDevice.
**/
export class SasPortalCreateSignedDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encodedDevice" })
  encodedDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=installerId" })
  installerId?: string;
}
