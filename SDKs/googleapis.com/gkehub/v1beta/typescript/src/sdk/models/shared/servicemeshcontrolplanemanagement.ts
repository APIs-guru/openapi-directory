import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";


export enum ServiceMeshControlPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stalled = "STALLED",
    NeedsAttention = "NEEDS_ATTENTION",
    Degraded = "DEGRADED"
}


// ServiceMeshControlPlaneManagement
/** 
 * Status of control plane management.
**/
export class ServiceMeshControlPlaneManagement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: ServiceMeshStatusDetails })
  details?: ServiceMeshStatusDetails[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ServiceMeshControlPlaneManagementStateEnum;
}
