package shared

// ServiceMeshMembershipState
// **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
type ServiceMeshMembershipState struct {
	AnalysisMessages       []ServiceMeshAnalysisMessage       `json:"analysisMessages,omitempty"`
	ConfigAPIVersion       *string                            `json:"configApiVersion,omitempty"`
	ControlPlaneManagement *ServiceMeshControlPlaneManagement `json:"controlPlaneManagement,omitempty"`
	DataPlaneManagement    *ServiceMeshDataPlaneManagement    `json:"dataPlaneManagement,omitempty"`
}
