package shared

// ExecuteActionRequest
// Request message for ActionService.ExecuteAction
type ExecuteActionRequest struct {
	Parameters map[string]interface{} `json:"parameters,omitempty"`
}
