package shared

// CreateFootnoteRequest
// Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
type CreateFootnoteRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
}
