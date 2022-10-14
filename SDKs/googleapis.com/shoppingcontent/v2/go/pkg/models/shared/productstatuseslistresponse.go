package shared

type ProductstatusesListResponse struct {
	Kind          *string         `json:"kind,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Resources     []ProductStatus `json:"resources,omitempty"`
}
