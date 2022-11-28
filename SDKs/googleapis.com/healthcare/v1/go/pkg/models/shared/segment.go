package shared

// Segment
// A segment in a structured format.
type Segment struct {
	Fields    map[string]string `json:"fields,omitempty"`
	SegmentID *string           `json:"segmentId,omitempty"`
	SetID     *string           `json:"setId,omitempty"`
}
