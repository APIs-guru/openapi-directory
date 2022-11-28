import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { CycleStep } from "./cyclestep";
export declare enum ReplicationCycleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * ReplicationCycle contains information about the current replication cycle status.
**/
export declare class ReplicationCycle extends SpeakeasyBase {
    cycleNumber?: number;
    endTime?: string;
    error?: Status;
    name?: string;
    progress?: number;
    progressPercent?: number;
    startTime?: string;
    state?: ReplicationCycleStateEnum;
    steps?: CycleStep[];
    totalPauseDuration?: string;
}
