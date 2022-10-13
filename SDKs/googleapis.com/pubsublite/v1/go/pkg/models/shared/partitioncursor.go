package shared

type PartitionCursor struct {
	Cursor    *Cursor `json:"cursor"`
	Partition *string `json:"partition"`
}
