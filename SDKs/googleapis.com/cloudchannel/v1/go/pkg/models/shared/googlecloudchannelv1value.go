package shared

// GoogleCloudChannelV1Value
// Data type and value of a parameter.
type GoogleCloudChannelV1Value struct {
	BoolValue   *bool                  `json:"boolValue,omitempty"`
	DoubleValue *float64               `json:"doubleValue,omitempty"`
	Int64Value  *string                `json:"int64Value,omitempty"`
	ProtoValue  map[string]interface{} `json:"protoValue,omitempty"`
	StringValue *string                `json:"stringValue,omitempty"`
}
