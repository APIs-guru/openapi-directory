import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDefaults } from "./computeenginetargetdefaults";
import { ReplicationCycle } from "./replicationcycle";
import { Status } from "./status";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { CloneJob } from "./clonejob";
import { CutoverJob } from "./cutoverjob";
import { ComputeEngineTargetDefaultsInput } from "./computeenginetargetdefaults";
export declare enum MigratingVmStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Ready = "READY",
    FirstSync = "FIRST_SYNC",
    Active = "ACTIVE",
    CuttingOver = "CUTTING_OVER",
    Cutover = "CUTOVER",
    FinalSync = "FINAL_SYNC",
    Paused = "PAUSED",
    Finalizing = "FINALIZING",
    Finalized = "FINALIZED",
    Error = "ERROR"
}
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export declare class MigratingVm extends SpeakeasyBase {
    computeEngineTargetDefaults?: ComputeEngineTargetDefaults;
    createTime?: string;
    currentSyncInfo?: ReplicationCycle;
    description?: string;
    displayName?: string;
    error?: Status;
    group?: string;
    labels?: Map<string, string>;
    lastSync?: ReplicationSync;
    name?: string;
    policy?: SchedulePolicy;
    recentCloneJobs?: CloneJob[];
    recentCutoverJobs?: CutoverJob[];
    sourceVmId?: string;
    state?: MigratingVmStateEnum;
    stateTime?: string;
    updateTime?: string;
}
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export declare class MigratingVmInput extends SpeakeasyBase {
    computeEngineTargetDefaults?: ComputeEngineTargetDefaultsInput;
    currentSyncInfo?: ReplicationCycle;
    description?: string;
    displayName?: string;
    error?: Status;
    labels?: Map<string, string>;
    lastSync?: ReplicationSync;
    policy?: SchedulePolicy;
    sourceVmId?: string;
}
