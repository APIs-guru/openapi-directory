import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceNames
/** 
 * Identifiers used to describe the device.
**/
export class DeviceNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultNames" })
  defaultNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nicknames" })
  nicknames?: string[];
}
