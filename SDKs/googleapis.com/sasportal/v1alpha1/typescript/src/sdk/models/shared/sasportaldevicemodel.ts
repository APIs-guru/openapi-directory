import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalDeviceModel
/** 
 * Information about the model of the device.
**/
export class SasPortalDeviceModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @Metadata({ data: "json, name=hardwareVersion" })
  hardwareVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=softwareVersion" })
  softwareVersion?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
