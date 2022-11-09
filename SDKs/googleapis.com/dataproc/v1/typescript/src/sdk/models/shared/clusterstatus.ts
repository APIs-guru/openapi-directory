import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClusterStatusStateEnum {
    Unknown = "UNKNOWN"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Error = "ERROR"
,    ErrorDueToUpdate = "ERROR_DUE_TO_UPDATE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
,    Stopping = "STOPPING"
,    Stopped = "STOPPED"
,    Starting = "STARTING"
,    Repairing = "REPAIRING"
}

export enum ClusterStatusSubstateEnum {
    Unspecified = "UNSPECIFIED"
,    Unhealthy = "UNHEALTHY"
,    StaleStatus = "STALE_STATUS"
}


// ClusterStatus
/** 
 * The status of a cluster and its instances.
**/
export class ClusterStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=state" })
  state?: ClusterStatusStateEnum;

  @Metadata({ data: "json, name=stateStartTime" })
  stateStartTime?: string;

  @Metadata({ data: "json, name=substate" })
  substate?: ClusterStatusSubstateEnum;
}
