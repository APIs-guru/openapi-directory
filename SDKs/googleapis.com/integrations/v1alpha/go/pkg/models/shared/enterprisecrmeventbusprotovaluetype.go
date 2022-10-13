package shared

type EnterpriseCrmEventbusProtoValueType struct {
	BooleanValue *bool                                  `json:"booleanValue"`
	DoubleArray  *EnterpriseCrmEventbusProtoDoubleArray `json:"doubleArray"`
	DoubleValue  *float64                               `json:"doubleValue"`
	IntArray     *EnterpriseCrmEventbusProtoIntArray    `json:"intArray"`
	IntValue     *string                                `json:"intValue"`
	ProtoValue   map[string]interface{}                 `json:"protoValue"`
	StringArray  *EnterpriseCrmEventbusProtoStringArray `json:"stringArray"`
	StringValue  *string                                `json:"stringValue"`
}
