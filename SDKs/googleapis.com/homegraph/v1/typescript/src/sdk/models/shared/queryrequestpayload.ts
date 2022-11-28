import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentDeviceId } from "./agentdeviceid";



// QueryRequestPayload
/** 
 * Payload containing device IDs.
**/
export class QueryRequestPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: AgentDeviceId })
  devices?: AgentDeviceId[];
}
