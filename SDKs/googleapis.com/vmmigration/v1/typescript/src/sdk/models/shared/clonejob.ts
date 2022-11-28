import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";
import { CloneStep } from "./clonestep";


export enum CloneJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    AdaptingOs = "ADAPTING_OS"
}


// CloneJob
/** 
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
export class CloneJob extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CloneJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: CloneStep })
  steps?: CloneStep[];
}


// CloneJobInput
/** 
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
export class CloneJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeEngineTargetDetails" })
  computeEngineTargetDetails?: ComputeEngineTargetDetails;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;
}
