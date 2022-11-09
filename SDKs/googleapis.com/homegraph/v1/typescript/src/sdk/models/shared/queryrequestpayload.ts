import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentDeviceId } from "./agentdeviceid";


// QueryRequestPayload
/** 
 * Payload containing device IDs.
**/
export class QueryRequestPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.AgentDeviceId })
  devices?: AgentDeviceId[];
}
