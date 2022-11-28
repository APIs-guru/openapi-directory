package shared

// RepeatedEnumAttributeValue
// Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
type RepeatedEnumAttributeValue struct {
	SetValues   []string `json:"setValues,omitempty"`
	UnsetValues []string `json:"unsetValues,omitempty"`
}
