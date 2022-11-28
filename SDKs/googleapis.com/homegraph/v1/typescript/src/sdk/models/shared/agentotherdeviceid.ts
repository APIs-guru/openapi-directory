import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentOtherDeviceId
/** 
 * Alternate third-party device ID.
**/
export class AgentOtherDeviceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;
}
