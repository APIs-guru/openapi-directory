package shared

type ReplicasListResponse struct {
	NextPageToken *string
	Resources     []Replica
}
