package shared

type ListPartitionCursorsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	PartitionCursors []PartitionCursor `json:"partitionCursors"`
}
