import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceNames
/** 
 * Identifiers used to describe the device.
**/
export class DeviceNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultNames" })
  defaultNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nicknames" })
  nicknames?: string[];
}
