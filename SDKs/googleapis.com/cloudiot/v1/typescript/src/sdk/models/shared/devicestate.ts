import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceState
/** 
 * The device state, as reported by the device.
**/
export class DeviceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
