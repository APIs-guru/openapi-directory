package shared

type SchemaGroup struct {
	Choice    *bool            `json:"choice,omitempty"`
	MaxOccurs *int32           `json:"maxOccurs,omitempty"`
	Members   []GroupOrSegment `json:"members,omitempty"`
	MinOccurs *int32           `json:"minOccurs,omitempty"`
	Name      *string          `json:"name,omitempty"`
}
