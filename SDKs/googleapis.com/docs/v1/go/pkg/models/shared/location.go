package shared

// Location
// A particular location in the document.
type Location struct {
	Index     *int32  `json:"index,omitempty"`
	SegmentID *string `json:"segmentId,omitempty"`
}
