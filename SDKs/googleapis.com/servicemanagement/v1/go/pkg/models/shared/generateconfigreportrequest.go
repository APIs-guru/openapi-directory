package shared

type GenerateConfigReportRequest struct {
	NewConfig map[string]interface{} `json:"newConfig,omitempty"`
	OldConfig map[string]interface{} `json:"oldConfig,omitempty"`
}
