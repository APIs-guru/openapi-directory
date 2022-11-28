package shared

// GroupOrSegment
// Construct representing a logical group or a segment.
type GroupOrSegment struct {
	Group   *SchemaGroup   `json:"group,omitempty"`
	Segment *SchemaSegment `json:"segment,omitempty"`
}
