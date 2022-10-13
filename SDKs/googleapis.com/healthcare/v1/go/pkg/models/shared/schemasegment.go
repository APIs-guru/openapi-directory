package shared

type SchemaSegment struct {
	MaxOccurs *int32  `json:"maxOccurs"`
	MinOccurs *int32  `json:"minOccurs"`
	Type      *string `json:"type"`
}
