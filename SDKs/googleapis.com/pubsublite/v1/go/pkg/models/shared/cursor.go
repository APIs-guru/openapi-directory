package shared

// Cursor
// A cursor that describes the position of a message within a topic partition.
type Cursor struct {
	Offset *string `json:"offset,omitempty"`
}
