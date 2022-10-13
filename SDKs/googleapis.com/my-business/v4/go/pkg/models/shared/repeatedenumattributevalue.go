package shared

type RepeatedEnumAttributeValue struct {
	SetValues   []string `json:"setValues"`
	UnsetValues []string `json:"unsetValues"`
}
