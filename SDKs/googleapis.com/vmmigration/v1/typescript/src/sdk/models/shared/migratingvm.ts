import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeEngineTargetDefaults } from "./computeenginetargetdefaults";
import { ReplicationCycle } from "./replicationcycle";
import { Status } from "./status";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { CloneJob } from "./clonejob";
import { CutoverJob } from "./cutoverjob";

export enum MigratingVmStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Ready = "READY"
,    FirstSync = "FIRST_SYNC"
,    Active = "ACTIVE"
,    CuttingOver = "CUTTING_OVER"
,    Cutover = "CUTOVER"
,    FinalSync = "FINAL_SYNC"
,    Paused = "PAUSED"
,    Finalizing = "FINALIZING"
,    Finalized = "FINALIZED"
,    Error = "ERROR"
}


// MigratingVm
/** 
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export class MigratingVm extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEngineTargetDefaults" })
  computeEngineTargetDefaults?: ComputeEngineTargetDefaults;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=currentSyncInfo" })
  currentSyncInfo?: ReplicationCycle;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastSync" })
  lastSync?: ReplicationSync;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: SchedulePolicy;

  @Metadata({ data: "json, name=recentCloneJobs", elemType: shared.CloneJob })
  recentCloneJobs?: CloneJob[];

  @Metadata({ data: "json, name=recentCutoverJobs", elemType: shared.CutoverJob })
  recentCutoverJobs?: CutoverJob[];

  @Metadata({ data: "json, name=sourceVmId" })
  sourceVmId?: string;

  @Metadata({ data: "json, name=state" })
  state?: MigratingVmStateEnum;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
