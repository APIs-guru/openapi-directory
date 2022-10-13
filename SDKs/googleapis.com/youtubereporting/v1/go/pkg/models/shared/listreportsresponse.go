package shared

type ListReportsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Reports       []Report `json:"reports"`
}
