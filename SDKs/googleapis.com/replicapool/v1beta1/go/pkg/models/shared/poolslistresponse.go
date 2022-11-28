package shared

type PoolsListResponse struct {
	NextPageToken *string
	Resources     []Pool
}
