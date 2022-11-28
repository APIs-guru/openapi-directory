package shared

// ExecuteActionResponse
// Response message for ActionService.ExecuteAction
type ExecuteActionResponse struct {
	Results []map[string]interface{} `json:"results,omitempty"`
}
