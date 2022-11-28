package shared

// ParsedData
// The content of an HL7v2 message in a structured format.
type ParsedData struct {
	Segments []Segment `json:"segments,omitempty"`
}
