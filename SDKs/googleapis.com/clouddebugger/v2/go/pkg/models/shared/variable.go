package shared

type Variable struct {
	Members       []Variable     `json:"members"`
	Name          *string        `json:"name"`
	Status        *StatusMessage `json:"status"`
	Type          *string        `json:"type"`
	Value         *string        `json:"value"`
	VarTableIndex *int32         `json:"varTableIndex"`
}
