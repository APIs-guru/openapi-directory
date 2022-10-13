package shared

type OrdersListResponse struct {
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	Resources     []Order `json:"resources"`
}
