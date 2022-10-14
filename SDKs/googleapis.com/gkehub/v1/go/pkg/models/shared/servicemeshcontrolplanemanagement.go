package shared

type ServiceMeshControlPlaneManagementStateEnum string

const (
	ServiceMeshControlPlaneManagementStateEnumLifecycleStateUnspecified ServiceMeshControlPlaneManagementStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	ServiceMeshControlPlaneManagementStateEnumDisabled                  ServiceMeshControlPlaneManagementStateEnum = "DISABLED"
	ServiceMeshControlPlaneManagementStateEnumFailedPrecondition        ServiceMeshControlPlaneManagementStateEnum = "FAILED_PRECONDITION"
	ServiceMeshControlPlaneManagementStateEnumProvisioning              ServiceMeshControlPlaneManagementStateEnum = "PROVISIONING"
	ServiceMeshControlPlaneManagementStateEnumActive                    ServiceMeshControlPlaneManagementStateEnum = "ACTIVE"
	ServiceMeshControlPlaneManagementStateEnumStalled                   ServiceMeshControlPlaneManagementStateEnum = "STALLED"
	ServiceMeshControlPlaneManagementStateEnumNeedsAttention            ServiceMeshControlPlaneManagementStateEnum = "NEEDS_ATTENTION"
	ServiceMeshControlPlaneManagementStateEnumDegraded                  ServiceMeshControlPlaneManagementStateEnum = "DEGRADED"
)

type ServiceMeshControlPlaneManagement struct {
	Details []ServiceMeshStatusDetails                  `json:"details,omitempty"`
	State   *ServiceMeshControlPlaneManagementStateEnum `json:"state,omitempty"`
}
