package shared

type ListNotesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Notes         []Note  `json:"notes"`
}
