import { SpeakeasyBase } from "../../../internal/utils";
import { BandwidthLimit } from "./bandwidthlimit";
export declare enum AgentPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Deleting = "DELETING"
}
/**
 * Represents an On-Premises Agent pool.
**/
export declare class AgentPool extends SpeakeasyBase {
    bandwidthLimit?: BandwidthLimit;
    displayName?: string;
    name?: string;
    state?: AgentPoolStateEnum;
}
/**
 * Represents an On-Premises Agent pool.
**/
export declare class AgentPoolInput extends SpeakeasyBase {
    bandwidthLimit?: BandwidthLimit;
    displayName?: string;
    name?: string;
}
