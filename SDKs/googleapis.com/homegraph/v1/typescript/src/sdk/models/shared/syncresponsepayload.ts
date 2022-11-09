import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// SyncResponsePayload
/** 
 * Payload containing device information.
**/
export class SyncResponsePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];
}
