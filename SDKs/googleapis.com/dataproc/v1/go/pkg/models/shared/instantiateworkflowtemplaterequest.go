package shared

type InstantiateWorkflowTemplateRequest struct {
	Parameters map[string]string `json:"parameters,omitempty"`
	RequestID  *string           `json:"requestId,omitempty"`
	Version    *int32            `json:"version,omitempty"`
}
