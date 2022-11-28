import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDefaults } from "./computeenginetargetdefaults";
import { ReplicationCycle } from "./replicationcycle";
import { Status } from "./status";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { CloneJob } from "./clonejob";
import { CutoverJob } from "./cutoverjob";
import { ComputeEngineTargetDefaultsInput } from "./computeenginetargetdefaults";


export enum MigratingVmStateEnum {
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


// MigratingVm
/** 
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export class MigratingVm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" })
  computeEngineTargetDefaults?: ComputeEngineTargetDefaults;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currentSyncInfo" })
  currentSyncInfo?: ReplicationCycle;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: ReplicationSync;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: SchedulePolicy;

  @SpeakeasyMetadata({ data: "json, name=recentCloneJobs", elemType: CloneJob })
  recentCloneJobs?: CloneJob[];

  @SpeakeasyMetadata({ data: "json, name=recentCutoverJobs", elemType: CutoverJob })
  recentCutoverJobs?: CutoverJob[];

  @SpeakeasyMetadata({ data: "json, name=sourceVmId" })
  sourceVmId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MigratingVmStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// MigratingVmInput
/** 
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export class MigratingVmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" })
  computeEngineTargetDefaults?: ComputeEngineTargetDefaultsInput;

  @SpeakeasyMetadata({ data: "json, name=currentSyncInfo" })
  currentSyncInfo?: ReplicationCycle;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: ReplicationSync;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: SchedulePolicy;

  @SpeakeasyMetadata({ data: "json, name=sourceVmId" })
  sourceVmId?: string;
}
