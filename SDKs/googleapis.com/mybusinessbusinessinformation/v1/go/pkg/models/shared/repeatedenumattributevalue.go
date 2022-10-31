package shared

type RepeatedEnumAttributeValue struct {
	SetValues   []string `json:"setValues,omitempty"`
	UnsetValues []string `json:"unsetValues,omitempty"`
}
