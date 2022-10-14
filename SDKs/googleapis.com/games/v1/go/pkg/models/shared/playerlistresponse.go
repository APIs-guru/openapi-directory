package shared

type PlayerListResponse struct {
	Items         []Player `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
