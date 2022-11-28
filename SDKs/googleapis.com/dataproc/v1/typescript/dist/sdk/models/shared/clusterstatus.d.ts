import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClusterStatusStateEnum {
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
export declare enum ClusterStatusSubstateEnum {
    Unspecified = "UNSPECIFIED",
    Unhealthy = "UNHEALTHY",
    StaleStatus = "STALE_STATUS"
}
/**
 * The status of a cluster and its instances.
**/
export declare class ClusterStatus extends SpeakeasyBase {
    detail?: string;
    state?: ClusterStatusStateEnum;
    stateStartTime?: string;
    substate?: ClusterStatusSubstateEnum;
}
