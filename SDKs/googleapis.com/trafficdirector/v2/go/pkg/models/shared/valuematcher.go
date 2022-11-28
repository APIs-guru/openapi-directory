package shared

// ValueMatcher
// Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
type ValueMatcher struct {
	BoolMatch    *bool                  `json:"boolMatch,omitempty"`
	DoubleMatch  *DoubleMatcher         `json:"doubleMatch,omitempty"`
	ListMatch    *ListMatcher           `json:"listMatch,omitempty"`
	NullMatch    map[string]interface{} `json:"nullMatch,omitempty"`
	PresentMatch *bool                  `json:"presentMatch,omitempty"`
	StringMatch  *StringMatcher         `json:"stringMatch,omitempty"`
}
