package shared

// GenerateConfigReportRequest
// Request message for GenerateConfigReport method.
type GenerateConfigReportRequest struct {
	NewConfig map[string]interface{} `json:"newConfig,omitempty"`
	OldConfig map[string]interface{} `json:"oldConfig,omitempty"`
}
