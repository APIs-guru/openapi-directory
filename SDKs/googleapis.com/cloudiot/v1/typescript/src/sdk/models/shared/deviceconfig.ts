import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceConfig
/** 
 * The device configuration. Eventually delivered to devices.
**/
export class DeviceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudUpdateTime" })
  cloudUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceAckTime" })
  deviceAckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
