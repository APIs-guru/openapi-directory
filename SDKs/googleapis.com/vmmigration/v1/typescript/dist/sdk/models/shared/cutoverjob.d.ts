import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";
import { CutoverStep } from "./cutoverstep";
export declare enum CutoverJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Active = "ACTIVE",
    AdaptingOs = "ADAPTING_OS"
}
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export declare class CutoverJobInput extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    error?: Status;
}
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export declare class CutoverJob extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    createTime?: string;
    endTime?: string;
    error?: Status;
    name?: string;
    progressPercent?: number;
    state?: CutoverJobStateEnum;
    stateMessage?: string;
    stateTime?: string;
    steps?: CutoverStep[];
}
