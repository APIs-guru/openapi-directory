import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerOnClusterState } from "./policycontrolleronclusterstate";


export enum PolicyControllerMembershipStateStateEnum {
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


// PolicyControllerMembershipState
/** 
 * **Policy Controller**: State for a single cluster.
**/
export class PolicyControllerMembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentStates", elemType: PolicyControllerOnClusterState })
  componentStates?: Map<string, PolicyControllerOnClusterState>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PolicyControllerMembershipStateStateEnum;
}
