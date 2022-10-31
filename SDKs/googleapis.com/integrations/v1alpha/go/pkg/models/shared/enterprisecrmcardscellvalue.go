package shared

type EnterpriseCrmCardsCellValue struct {
	BooleanValue *bool                  `json:"booleanValue,omitempty"`
	DoubleValue  *float64               `json:"doubleValue,omitempty"`
	Empty        map[string]interface{} `json:"empty,omitempty"`
	LongValue    *string                `json:"longValue,omitempty"`
	StringValue  *string                `json:"stringValue,omitempty"`
}
