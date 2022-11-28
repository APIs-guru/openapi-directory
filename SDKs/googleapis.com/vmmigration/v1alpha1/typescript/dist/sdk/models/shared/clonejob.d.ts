import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { TargetVmDetailsInput } from "./targetvmdetails";
import { Status } from "./status";
import { TargetVmDetails } from "./targetvmdetails";
import { CloneStep } from "./clonestep";
export declare enum CloneJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    AdaptingOs = "ADAPTING_OS"
}
/**
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
export declare class CloneJobInput extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    computeEngineVmDetails?: TargetVmDetailsInput;
    error?: Status;
    targetDetails?: TargetVmDetailsInput;
}
/**
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
export declare class CloneJob extends SpeakeasyBase {
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    computeEngineVmDetails?: TargetVmDetails;
    createTime?: string;
    endTime?: string;
    error?: Status;
    name?: string;
    state?: CloneJobStateEnum;
    stateTime?: string;
    steps?: CloneStep[];
    targetDetails?: TargetVmDetails;
}
