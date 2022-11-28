package shared

// Links
// A collection of links, which are references from this span to a span in the same or different trace.
type Links struct {
	DroppedLinksCount *int32 `json:"droppedLinksCount,omitempty"`
	Link              []Link `json:"link,omitempty"`
}
