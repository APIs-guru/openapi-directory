import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyControllerOnClusterState } from "./policycontrolleronclusterstate";
export declare enum PolicyControllerMembershipStateStateEnum {
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
 * **Policy Controller**: State for a single cluster.
**/
export declare class PolicyControllerMembershipState extends SpeakeasyBase {
    clusterName?: string;
    componentStates?: Map<string, PolicyControllerOnClusterState>;
    state?: PolicyControllerMembershipStateStateEnum;
}
