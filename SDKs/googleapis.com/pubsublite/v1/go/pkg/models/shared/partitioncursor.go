package shared

// PartitionCursor
// A pair of a Cursor and the partition it is for.
type PartitionCursor struct {
	Cursor    *Cursor `json:"cursor,omitempty"`
	Partition *string `json:"partition,omitempty"`
}
