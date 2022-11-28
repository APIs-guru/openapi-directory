import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PolicyControllerOnClusterStateStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installing = "INSTALLING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Decomissioning = "DECOMISSIONING",
    ClusterError = "CLUSTER_ERROR",
    HubError = "HUB_ERROR",
    Suspended = "SUSPENDED"
}
/**
 * OnClusterState represents the state of a sub-component of Policy Controller.
**/
export declare class PolicyControllerOnClusterState extends SpeakeasyBase {
    details?: string;
    state?: PolicyControllerOnClusterStateStateEnum;
}
