package shared

// ServiceMeshFeatureState
// **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
type ServiceMeshFeatureState struct {
	AnalysisMessages []ServiceMeshAnalysisMessage `json:"analysisMessages,omitempty"`
}
