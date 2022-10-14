package shared

type CustomVariable struct {
	Index *string `json:"index,omitempty"`
	Kind  *string `json:"kind,omitempty"`
	Value *string `json:"value,omitempty"`
}
