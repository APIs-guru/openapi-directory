package shared

type InstantiateWorkflowTemplateRequest struct {
	Parameters map[string]string `json:"parameters"`
	RequestID  *string           `json:"requestId"`
	Version    *int32            `json:"version"`
}
