package shared

type ListNotesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Notes         []Note  `json:"notes,omitempty"`
}
