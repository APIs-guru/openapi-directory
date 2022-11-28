package shared

// InsertPageBreakRequest
// Inserts a page break followed by a newline at the specified location.
type InsertPageBreakRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
}
