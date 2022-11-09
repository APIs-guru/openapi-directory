import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";

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

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=state" })
  state?: CutoverJobStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;
}
