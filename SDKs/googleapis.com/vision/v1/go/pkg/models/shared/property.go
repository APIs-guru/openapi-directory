package shared

type Property struct {
	Name        *string `json:"name,omitempty"`
	Uint64Value *string `json:"uint64Value,omitempty"`
	Value       *string `json:"value,omitempty"`
}
