package shared

type SchemaGroup struct {
	Choice    *bool            `json:"choice"`
	MaxOccurs *int32           `json:"maxOccurs"`
	Members   []GroupOrSegment `json:"members"`
	MinOccurs *int32           `json:"minOccurs"`
	Name      *string          `json:"name"`
}
