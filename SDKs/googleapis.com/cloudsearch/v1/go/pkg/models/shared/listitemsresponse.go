package shared

type ListItemsResponse struct {
	Items         []Item  `json:"items"`
	NextPageToken *string `json:"nextPageToken"`
}
