package shared

type CounterOptions struct {
	CustomFields []CustomField `json:"customFields"`
	Field        *string       `json:"field"`
	Metric       *string       `json:"metric"`
}
