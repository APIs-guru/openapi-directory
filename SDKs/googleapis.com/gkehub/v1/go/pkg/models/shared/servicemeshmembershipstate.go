package shared

type ServiceMeshMembershipState struct {
	ControlPlaneManagement *ServiceMeshControlPlaneManagement `json:"controlPlaneManagement"`
	DataPlaneManagement    *ServiceMeshDataPlaneManagement    `json:"dataPlaneManagement"`
}
