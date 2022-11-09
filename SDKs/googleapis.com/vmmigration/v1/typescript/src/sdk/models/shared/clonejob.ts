import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";

export enum CloneJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Succeeded = "SUCCEEDED"
,    Cancelled = "CANCELLED"
,    Cancelling = "CANCELLING"
,    AdaptingOs = "ADAPTING_OS"
}


// CloneJob
/** 
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
export class CloneJob extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=state" })
  state?: CloneJobStateEnum;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;
}
