import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";

export enum ServiceMeshControlPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    FailedPrecondition = "FAILED_PRECONDITION"
,    Provisioning = "PROVISIONING"
,    Active = "ACTIVE"
,    Stalled = "STALLED"
,    NeedsAttention = "NEEDS_ATTENTION"
,    Degraded = "DEGRADED"
}


// ServiceMeshControlPlaneManagement
/** 
 * Status of control plane management.
**/
export class ServiceMeshControlPlaneManagement extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.ServiceMeshStatusDetails })
  details?: ServiceMeshStatusDetails[];

  @Metadata({ data: "json, name=state" })
  state?: ServiceMeshControlPlaneManagementStateEnum;
}
