package shared

type ListCustomListsResponse struct {
	CustomLists   []CustomList `json:"customLists"`
	NextPageToken *string      `json:"nextPageToken"`
}
