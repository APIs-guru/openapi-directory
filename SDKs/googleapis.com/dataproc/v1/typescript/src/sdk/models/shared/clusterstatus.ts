import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClusterStatusStateEnum {
    Unknown = "UNKNOWN",
    Creating = "CREATING",
    Running = "RUNNING",
    Error = "ERROR",
    ErrorDueToUpdate = "ERROR_DUE_TO_UPDATE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Starting = "STARTING",
    Repairing = "REPAIRING"
}

export enum ClusterStatusSubstateEnum {
    Unspecified = "UNSPECIFIED",
    Unhealthy = "UNHEALTHY",
    StaleStatus = "STALE_STATUS"
}


// ClusterStatus
/** 
 * The status of a cluster and its instances.
**/
export class ClusterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClusterStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateStartTime" })
  stateStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=substate" })
  substate?: ClusterStatusSubstateEnum;
}
