package shared

type Variable struct {
	Members       []Variable     `json:"members,omitempty"`
	Name          *string        `json:"name,omitempty"`
	Status        *StatusMessage `json:"status,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
	VarTableIndex *int32         `json:"varTableIndex,omitempty"`
}
