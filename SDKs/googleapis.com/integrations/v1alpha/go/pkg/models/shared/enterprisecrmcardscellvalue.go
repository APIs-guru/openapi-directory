package shared

type EnterpriseCrmCardsCellValue struct {
	BooleanValue *bool                  `json:"booleanValue"`
	DoubleValue  *float64               `json:"doubleValue"`
	Empty        map[string]interface{} `json:"empty"`
	LongValue    *string                `json:"longValue"`
	StringValue  *string                `json:"stringValue"`
}
