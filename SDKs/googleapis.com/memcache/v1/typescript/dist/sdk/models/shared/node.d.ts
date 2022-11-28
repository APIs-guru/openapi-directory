import { SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParameters } from "./memcacheparameters";
export declare enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
export declare class Node extends SpeakeasyBase {
    host?: string;
    nodeId?: string;
    parameters?: MemcacheParameters;
    port?: number;
    state?: NodeStateEnum;
    zone?: string;
}
