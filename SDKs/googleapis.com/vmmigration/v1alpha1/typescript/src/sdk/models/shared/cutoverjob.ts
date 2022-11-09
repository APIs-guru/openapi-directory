import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { TargetVmDetails } from "./targetvmdetails";
import { Status } from "./status";
import { CutoverStep } from "./cutoverstep";
import { TargetVmDetails } from "./targetvmdetails";

export enum CutoverJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Failed = "FAILED"
,    Succeeded = "SUCCEEDED"
,    Cancelled = "CANCELLED"
,    Cancelling = "CANCELLING"
,    Active = "ACTIVE"
,    AdaptingOs = "ADAPTING_OS"
}


// CutoverJob
/** 
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export class CutoverJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEngineTargetDetails" })
  computeEngineTargetDetails?: ComputeEngineTargetDetails;

  @Metadata({ data: "json, name=computeEngineVmDetails" })
  computeEngineVmDetails?: TargetVmDetails;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=state" })
  state?: CutoverJobStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.CutoverStep })
  steps?: CutoverStep[];

  @Metadata({ data: "json, name=targetDetails" })
  targetDetails?: TargetVmDetails;
}
