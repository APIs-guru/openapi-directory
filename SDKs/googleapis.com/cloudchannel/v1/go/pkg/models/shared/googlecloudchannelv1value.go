package shared

type GoogleCloudChannelV1Value struct {
	BoolValue   *bool                  `json:"boolValue"`
	DoubleValue *float64               `json:"doubleValue"`
	Int64Value  *string                `json:"int64Value"`
	ProtoValue  map[string]interface{} `json:"protoValue"`
	StringValue *string                `json:"stringValue"`
}
