package shared

type ServiceMeshDataPlaneManagementStateEnum string

const (
	ServiceMeshDataPlaneManagementStateEnumLifecycleStateUnspecified ServiceMeshDataPlaneManagementStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	ServiceMeshDataPlaneManagementStateEnumDisabled                  ServiceMeshDataPlaneManagementStateEnum = "DISABLED"
	ServiceMeshDataPlaneManagementStateEnumFailedPrecondition        ServiceMeshDataPlaneManagementStateEnum = "FAILED_PRECONDITION"
	ServiceMeshDataPlaneManagementStateEnumProvisioning              ServiceMeshDataPlaneManagementStateEnum = "PROVISIONING"
	ServiceMeshDataPlaneManagementStateEnumActive                    ServiceMeshDataPlaneManagementStateEnum = "ACTIVE"
	ServiceMeshDataPlaneManagementStateEnumStalled                   ServiceMeshDataPlaneManagementStateEnum = "STALLED"
	ServiceMeshDataPlaneManagementStateEnumNeedsAttention            ServiceMeshDataPlaneManagementStateEnum = "NEEDS_ATTENTION"
	ServiceMeshDataPlaneManagementStateEnumDegraded                  ServiceMeshDataPlaneManagementStateEnum = "DEGRADED"
)

type ServiceMeshDataPlaneManagement struct {
	Details []ServiceMeshStatusDetails               `json:"details"`
	State   *ServiceMeshDataPlaneManagementStateEnum `json:"state"`
}
