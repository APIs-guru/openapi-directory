import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";
import { CutoverStep } from "./cutoverstep";


export enum CutoverJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Active = "ACTIVE",
    AdaptingOs = "ADAPTING_OS"
}


// CutoverJobInput
/** 
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export class CutoverJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDetails" })
  computeEngineTargetDetails?: ComputeEngineTargetDetails;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;
}


// CutoverJob
/** 
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export class CutoverJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDetails" })
  computeEngineTargetDetails?: ComputeEngineTargetDetails;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CutoverJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: CutoverStep })
  steps?: CutoverStep[];
}
