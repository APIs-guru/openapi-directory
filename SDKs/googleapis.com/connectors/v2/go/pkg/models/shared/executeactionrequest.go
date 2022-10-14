package shared

type ExecuteActionRequest struct {
	Parameters map[string]interface{} `json:"parameters,omitempty"`
}
