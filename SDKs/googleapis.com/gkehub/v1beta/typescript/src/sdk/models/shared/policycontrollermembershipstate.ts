import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyControllerOnClusterState } from "./policycontrolleronclusterstate";

export enum PolicyControllerMembershipStateStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installing = "INSTALLING"
,    Active = "ACTIVE"
,    Updating = "UPDATING"
,    Decomissioning = "DECOMISSIONING"
,    ClusterError = "CLUSTER_ERROR"
,    HubError = "HUB_ERROR"
,    Suspended = "SUSPENDED"
}


// PolicyControllerMembershipState
/** 
 * **Policy Controller**: State for a single cluster.
**/
export class PolicyControllerMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=componentStates", elemType: shared.PolicyControllerOnClusterState })
  componentStates?: Map<string, PolicyControllerOnClusterState>;

  @Metadata({ data: "json, name=state" })
  state?: PolicyControllerMembershipStateStateEnum;
}
