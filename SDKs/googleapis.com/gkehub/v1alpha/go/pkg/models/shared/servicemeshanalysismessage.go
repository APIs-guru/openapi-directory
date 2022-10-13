package shared

type ServiceMeshAnalysisMessage struct {
	Args          map[string]interface{}          `json:"args"`
	Description   *string                         `json:"description"`
	MessageBase   *ServiceMeshAnalysisMessageBase `json:"messageBase"`
	ResourcePaths []string                        `json:"resourcePaths"`
}
