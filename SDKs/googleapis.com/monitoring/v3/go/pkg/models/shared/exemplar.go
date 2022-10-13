package shared

type Exemplar struct {
	Attachments []map[string]interface{} `json:"attachments"`
	Timestamp   *string                  `json:"timestamp"`
	Value       *float64                 `json:"value"`
}
