package shared

type GoogleRPCStatus struct {
	Code    *int32                   `json:"code,omitempty"`
	Details []map[string]interface{} `json:"details,omitempty"`
	Message *string                  `json:"message,omitempty"`
}
