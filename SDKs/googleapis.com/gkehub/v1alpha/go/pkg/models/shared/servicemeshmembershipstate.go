package shared



type ServiceMeshMembershipState struct {
    AnalysisMessages []ServiceMeshAnalysisMessage `json:"analysisMessages,omitempty"`
    ConfigAPIVersion *string `json:"configApiVersion,omitempty"`
    ControlPlaneManagement *ServiceMeshControlPlaneManagement `json:"controlPlaneManagement,omitempty"`
    DataPlaneManagement *ServiceMeshDataPlaneManagement `json:"dataPlaneManagement,omitempty"`
    
}

