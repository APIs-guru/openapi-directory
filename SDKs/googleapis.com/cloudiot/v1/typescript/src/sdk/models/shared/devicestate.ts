import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceState
/** 
 * The device state, as reported by the device.
**/
export class DeviceState extends SpeakeasyBase {
  @Metadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
