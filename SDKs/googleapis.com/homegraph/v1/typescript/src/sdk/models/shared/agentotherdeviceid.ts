import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentOtherDeviceId
/** 
 * Alternate third-party device ID.
**/
export class AgentOtherDeviceId extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;
}
