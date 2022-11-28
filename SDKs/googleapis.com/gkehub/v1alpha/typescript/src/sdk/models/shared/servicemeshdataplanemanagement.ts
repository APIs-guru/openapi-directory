import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";


export enum ServiceMeshDataPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stalled = "STALLED",
    NeedsAttention = "NEEDS_ATTENTION",
    Degraded = "DEGRADED"
}


// ServiceMeshDataPlaneManagement
/** 
 * Status of data plane management. Only reported per-member.
**/
export class ServiceMeshDataPlaneManagement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: ServiceMeshStatusDetails })
  details?: ServiceMeshStatusDetails[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ServiceMeshDataPlaneManagementStateEnum;
}
