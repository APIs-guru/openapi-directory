package shared

type PlayerEventListResponse struct {
	Items         []PlayerEvent `json:"items,omitempty"`
	Kind          *string       `json:"kind,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
