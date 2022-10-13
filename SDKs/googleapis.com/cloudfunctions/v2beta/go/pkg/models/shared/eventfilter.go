package shared

type EventFilter struct {
	Attribute *string `json:"attribute"`
	Operator  *string `json:"operator"`
	Value     *string `json:"value"`
}
