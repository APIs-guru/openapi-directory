package shared

type AccountstatusesListResponse struct {
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
	Resources     []AccountStatus `json:"resources"`
}
