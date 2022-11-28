package shared

// RPCResponse
// Object containing the JSON response from the Neblio node.
type RPCResponse struct {
	Error  map[string]interface{} `json:"error,omitempty"`
	ID     *string                `json:"id,omitempty"`
	Result map[string]interface{} `json:"result,omitempty"`
}
