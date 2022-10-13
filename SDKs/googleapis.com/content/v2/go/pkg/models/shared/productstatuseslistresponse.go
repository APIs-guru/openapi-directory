package shared

type ProductstatusesListResponse struct {
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
	Resources     []ProductStatus `json:"resources"`
}
