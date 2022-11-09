import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceConfig
/** 
 * The device configuration. Eventually delivered to devices.
**/
export class DeviceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @Metadata({ data: "json, name=cloudUpdateTime" })
  cloudUpdateTime?: string;

  @Metadata({ data: "json, name=deviceAckTime" })
  deviceAckTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
