package shared

type RPCResponse struct {
	Error  map[string]interface{} `json:"error"`
	ID     *string                `json:"id"`
	Result map[string]interface{} `json:"result"`
}
