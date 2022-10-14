package shared

type ListCustomListsResponse struct {
	CustomLists   []CustomList `json:"customLists,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
