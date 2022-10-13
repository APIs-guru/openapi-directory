package shared

type GenerateConfigReportRequest struct {
	NewConfig map[string]interface{} `json:"newConfig"`
	OldConfig map[string]interface{} `json:"oldConfig"`
}
