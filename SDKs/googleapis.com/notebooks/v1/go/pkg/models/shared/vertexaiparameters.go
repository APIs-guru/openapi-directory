package shared

type VertexAiParameters struct {
	Env     map[string]string `json:"env"`
	Network *string           `json:"network"`
}
