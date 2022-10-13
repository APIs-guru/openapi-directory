package shared

type ListRestoresResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Restores      []Restore `json:"restores"`
	Unreachable   []string  `json:"unreachable"`
}
