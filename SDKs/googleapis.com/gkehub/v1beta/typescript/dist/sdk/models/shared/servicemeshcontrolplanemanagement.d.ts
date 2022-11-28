import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";
export declare enum ServiceMeshControlPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stalled = "STALLED",
    NeedsAttention = "NEEDS_ATTENTION",
    Degraded = "DEGRADED"
}
/**
 * Status of control plane management.
**/
export declare class ServiceMeshControlPlaneManagement extends SpeakeasyBase {
    details?: ServiceMeshStatusDetails[];
    state?: ServiceMeshControlPlaneManagementStateEnum;
}
