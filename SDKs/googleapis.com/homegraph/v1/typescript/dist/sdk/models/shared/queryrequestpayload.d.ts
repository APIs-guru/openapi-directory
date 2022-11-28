import { SpeakeasyBase } from "../../../internal/utils";
import { AgentDeviceId } from "./agentdeviceid";
/**
 * Payload containing device IDs.
**/
export declare class QueryRequestPayload extends SpeakeasyBase {
    devices?: AgentDeviceId[];
}
