import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// SyncResponsePayload
/** 
 * Payload containing device information.
**/
export class SyncResponsePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=devices", elemType: Device })
  devices?: Device[];
}
