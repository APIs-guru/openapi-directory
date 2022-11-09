import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PolicyControllerOnClusterStateStateEnum {
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


// PolicyControllerOnClusterState
/** 
 * OnClusterState represents the state of a sub-component of Policy Controller.
**/
export class PolicyControllerOnClusterState extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=state" })
  state?: PolicyControllerOnClusterStateStateEnum;
}
