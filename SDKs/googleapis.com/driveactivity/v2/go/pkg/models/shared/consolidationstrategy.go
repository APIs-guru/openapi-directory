package shared

type ConsolidationStrategy struct {
	Legacy map[string]interface{} `json:"legacy"`
	None   map[string]interface{} `json:"none"`
}
