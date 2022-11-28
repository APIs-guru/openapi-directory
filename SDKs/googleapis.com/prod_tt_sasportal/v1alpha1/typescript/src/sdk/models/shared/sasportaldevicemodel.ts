import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalDeviceModel
/** 
 * Information about the model of the device.
**/
export class SasPortalDeviceModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=hardwareVersion" })
  hardwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=softwareVersion" })
  softwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
