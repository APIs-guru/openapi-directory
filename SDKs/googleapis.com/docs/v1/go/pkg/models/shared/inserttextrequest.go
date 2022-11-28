package shared

// InsertTextRequest
// Inserts text at the specified location.
type InsertTextRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
	Text                 *string               `json:"text,omitempty"`
}
