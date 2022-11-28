import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { TargetVmDetails } from "./targetvmdetails";
import { Status } from "./status";
import { CutoverStep } from "./cutoverstep";
import { TargetVmDetailsInput } from "./targetvmdetails";
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
export declare class CutoverJob extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    computeEngineVmDetails?: TargetVmDetails;
    createTime?: string;
    endTime?: string;
    error?: Status;
    name?: string;
    progress?: number;
    progressPercent?: number;
    state?: CutoverJobStateEnum;
    stateMessage?: string;
    stateTime?: string;
    steps?: CutoverStep[];
    targetDetails?: TargetVmDetails;
}
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
**/
export declare class CutoverJobInput extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    computeEngineVmDetails?: TargetVmDetailsInput;
    error?: Status;
    targetDetails?: TargetVmDetailsInput;
}
