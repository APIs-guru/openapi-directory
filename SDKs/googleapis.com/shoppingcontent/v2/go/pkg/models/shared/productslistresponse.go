package shared

type ProductsListResponse struct {
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Resources     []Product `json:"resources,omitempty"`
}
