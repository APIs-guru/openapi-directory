package shared

type ServiceMeshMembershipState struct {
	ControlPlaneManagement *ServiceMeshControlPlaneManagement `json:"controlPlaneManagement,omitempty"`
	DataPlaneManagement    *ServiceMeshDataPlaneManagement    `json:"dataPlaneManagement,omitempty"`
}
