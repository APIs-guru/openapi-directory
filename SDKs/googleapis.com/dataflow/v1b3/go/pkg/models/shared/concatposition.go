package shared

// ConcatPosition
// A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
type ConcatPosition struct {
	Index    *int32    `json:"index,omitempty"`
	Position *Position `json:"position,omitempty"`
}
