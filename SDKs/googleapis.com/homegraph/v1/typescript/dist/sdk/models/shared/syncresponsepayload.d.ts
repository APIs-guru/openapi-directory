import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";
/**
 * Payload containing device information.
**/
export declare class SyncResponsePayload extends SpeakeasyBase {
    agentUserId?: string;
    devices?: Device[];
}
