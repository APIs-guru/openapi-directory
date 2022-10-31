package shared

type ExecutionRequest struct {
	DevMode      *bool         `json:"devMode,omitempty"`
	Function     *string       `json:"function,omitempty"`
	Parameters   []interface{} `json:"parameters,omitempty"`
	SessionState *string       `json:"sessionState,omitempty"`
}
