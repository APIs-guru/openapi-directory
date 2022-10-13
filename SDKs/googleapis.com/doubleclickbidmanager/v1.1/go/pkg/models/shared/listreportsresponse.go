package shared

type ListReportsResponse struct {
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
	Reports       []Report `json:"reports"`
}
