package shared

type OrderreturnsListResponse struct {
	Kind          *string               `json:"kind"`
	NextPageToken *string               `json:"nextPageToken"`
	Resources     []MerchantOrderReturn `json:"resources"`
}
