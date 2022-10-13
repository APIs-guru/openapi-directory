package shared

type PlayerListResponse struct {
	Items         []Player `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
}
