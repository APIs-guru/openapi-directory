package shared

// EnterpriseCrmEventbusProtoValueType
// Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
type EnterpriseCrmEventbusProtoValueType struct {
	BooleanValue *bool                                  `json:"booleanValue,omitempty"`
	DoubleArray  *EnterpriseCrmEventbusProtoDoubleArray `json:"doubleArray,omitempty"`
	DoubleValue  *float64                               `json:"doubleValue,omitempty"`
	IntArray     *EnterpriseCrmEventbusProtoIntArray    `json:"intArray,omitempty"`
	IntValue     *string                                `json:"intValue,omitempty"`
	ProtoValue   map[string]interface{}                 `json:"protoValue,omitempty"`
	StringArray  *EnterpriseCrmEventbusProtoStringArray `json:"stringArray,omitempty"`
	StringValue  *string                                `json:"stringValue,omitempty"`
}
