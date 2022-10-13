package shared

type ProductsListResponse struct {
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	Resources     []Product `json:"resources"`
}
