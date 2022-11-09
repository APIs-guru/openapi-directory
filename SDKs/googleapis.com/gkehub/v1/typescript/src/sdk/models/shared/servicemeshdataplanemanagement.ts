import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";

export enum ServiceMeshDataPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    FailedPrecondition = "FAILED_PRECONDITION"
,    Provisioning = "PROVISIONING"
,    Active = "ACTIVE"
,    Stalled = "STALLED"
,    NeedsAttention = "NEEDS_ATTENTION"
,    Degraded = "DEGRADED"
}


// ServiceMeshDataPlaneManagement
/** 
 * Status of data plane management. Only reported per-member.
**/
export class ServiceMeshDataPlaneManagement extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.ServiceMeshStatusDetails })
  details?: ServiceMeshStatusDetails[];

  @Metadata({ data: "json, name=state" })
  state?: ServiceMeshDataPlaneManagementStateEnum;
}
