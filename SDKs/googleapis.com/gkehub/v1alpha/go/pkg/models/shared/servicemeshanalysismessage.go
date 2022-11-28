package shared

// ServiceMeshAnalysisMessage
// AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
type ServiceMeshAnalysisMessage struct {
	Args          map[string]interface{}          `json:"args,omitempty"`
	Description   *string                         `json:"description,omitempty"`
	MessageBase   *ServiceMeshAnalysisMessageBase `json:"messageBase,omitempty"`
	ResourcePaths []string                        `json:"resourcePaths,omitempty"`
}
