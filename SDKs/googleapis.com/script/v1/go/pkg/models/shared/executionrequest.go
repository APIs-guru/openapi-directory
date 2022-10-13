package shared

type ExecutionRequest struct {
	DevMode      *bool         `json:"devMode"`
	Function     *string       `json:"function"`
	Parameters   []interface{} `json:"parameters"`
	SessionState *string       `json:"sessionState"`
}
