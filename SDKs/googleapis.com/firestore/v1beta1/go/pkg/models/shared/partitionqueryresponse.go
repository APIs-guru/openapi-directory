package shared

type PartitionQueryResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Partitions    []Cursor `json:"partitions"`
}
