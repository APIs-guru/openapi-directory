package shared

// PartitionQueryResponse
// The response for Firestore.PartitionQuery.
type PartitionQueryResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Partitions    []Cursor `json:"partitions,omitempty"`
}
