import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSourceVmDetails } from "./awssourcevmdetails";
import { ComputeEngineTargetDefaultsInput } from "./computeenginetargetdefaults";
import { TargetVmDetailsInput } from "./targetvmdetails";
import { ReplicationCycle } from "./replicationcycle";
import { Status } from "./status";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { ComputeEngineTargetDefaults } from "./computeenginetargetdefaults";
import { TargetVmDetails } from "./targetvmdetails";
import { CloneJob } from "./clonejob";
import { CutoverJob } from "./cutoverjob";


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


// MigratingVmInput
/** 
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export class MigratingVmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsSourceVmDetails" })
  awsSourceVmDetails?: AwsSourceVmDetails;

  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" })
  computeEngineTargetDefaults?: ComputeEngineTargetDefaultsInput;

  @SpeakeasyMetadata({ data: "json, name=computeEngineVmDefaults" })
  computeEngineVmDefaults?: TargetVmDetailsInput;

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

  @SpeakeasyMetadata({ data: "json, name=targetDefaults" })
  targetDefaults?: TargetVmDetailsInput;
}


// MigratingVm
/** 
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
export class MigratingVm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsSourceVmDetails" })
  awsSourceVmDetails?: AwsSourceVmDetails;

  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" })
  computeEngineTargetDefaults?: ComputeEngineTargetDefaults;

  @SpeakeasyMetadata({ data: "json, name=computeEngineVmDefaults" })
  computeEngineVmDefaults?: TargetVmDetails;

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

  @SpeakeasyMetadata({ data: "json, name=targetDefaults" })
  targetDefaults?: TargetVmDetails;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
