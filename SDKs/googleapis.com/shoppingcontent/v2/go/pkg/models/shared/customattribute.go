package shared

type CustomAttribute struct {
	Name  *string `json:"name,omitempty"`
	Type  *string `json:"type,omitempty"`
	Unit  *string `json:"unit,omitempty"`
	Value *string `json:"value,omitempty"`
}
