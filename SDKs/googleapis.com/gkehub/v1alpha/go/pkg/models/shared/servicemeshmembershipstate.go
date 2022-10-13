package shared

type ServiceMeshMembershipState struct {
	AnalysisMessages       []ServiceMeshAnalysisMessage       `json:"analysisMessages"`
	ConfigAPIVersion       *string                            `json:"configApiVersion"`
	ControlPlaneManagement *ServiceMeshControlPlaneManagement `json:"controlPlaneManagement"`
	DataPlaneManagement    *ServiceMeshDataPlaneManagement    `json:"dataPlaneManagement"`
}
