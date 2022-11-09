import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentDeviceId
/** 
 * Third-party device ID for one device.
**/
export class AgentDeviceId extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
