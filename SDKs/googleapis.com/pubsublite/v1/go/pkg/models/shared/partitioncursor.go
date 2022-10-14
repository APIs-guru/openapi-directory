package shared

type PartitionCursor struct {
	Cursor    *Cursor `json:"cursor,omitempty"`
	Partition *string `json:"partition,omitempty"`
}
