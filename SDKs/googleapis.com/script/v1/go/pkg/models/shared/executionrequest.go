package shared

// ExecutionRequest
// A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
type ExecutionRequest struct {
	DevMode      *bool         `json:"devMode,omitempty"`
	Function     *string       `json:"function,omitempty"`
	Parameters   []interface{} `json:"parameters,omitempty"`
	SessionState *string       `json:"sessionState,omitempty"`
}
