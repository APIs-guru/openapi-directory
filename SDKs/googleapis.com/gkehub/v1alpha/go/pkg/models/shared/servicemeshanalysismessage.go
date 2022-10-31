package shared

type ServiceMeshAnalysisMessage struct {
	Args          map[string]interface{}          `json:"args,omitempty"`
	Description   *string                         `json:"description,omitempty"`
	MessageBase   *ServiceMeshAnalysisMessageBase `json:"messageBase,omitempty"`
	ResourcePaths []string                        `json:"resourcePaths,omitempty"`
}
