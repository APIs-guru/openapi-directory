package shared

type GroupResult struct {
	Count      *string                `json:"count"`
	Properties map[string]interface{} `json:"properties"`
}
