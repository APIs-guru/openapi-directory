package shared

type PlayerEventListResponse struct {
	Items         []PlayerEvent `json:"items"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}
