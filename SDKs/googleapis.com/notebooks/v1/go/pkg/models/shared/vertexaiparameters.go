package shared

// VertexAiParameters
// Parameters used in Vertex AI JobType executions.
type VertexAiParameters struct {
	Env     map[string]string `json:"env,omitempty"`
	Network *string           `json:"network,omitempty"`
}
