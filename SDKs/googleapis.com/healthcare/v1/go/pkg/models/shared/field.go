package shared

type Field struct {
	MaxOccurs *int32  `json:"maxOccurs"`
	MinOccurs *int32  `json:"minOccurs"`
	Name      *string `json:"name"`
	Table     *string `json:"table"`
	Type      *string `json:"type"`
}
