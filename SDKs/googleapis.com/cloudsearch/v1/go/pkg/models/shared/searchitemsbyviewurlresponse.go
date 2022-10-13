package shared

type SearchItemsByViewURLResponse struct {
	Items         []Item  `json:"items"`
	NextPageToken *string `json:"nextPageToken"`
}
