package shared

// EndOfSegmentLocation
// Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
type EndOfSegmentLocation struct {
	SegmentID *string `json:"segmentId,omitempty"`
}
