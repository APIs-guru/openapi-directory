package shared

// SchemaSegment
// An HL7v2 Segment.
type SchemaSegment struct {
	MaxOccurs *int32  `json:"maxOccurs,omitempty"`
	MinOccurs *int32  `json:"minOccurs,omitempty"`
	Type      *string `json:"type,omitempty"`
}
