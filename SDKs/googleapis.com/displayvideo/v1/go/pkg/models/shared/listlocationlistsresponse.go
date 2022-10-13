package shared

type ListLocationListsResponse struct {
	LocationLists []LocationList `json:"locationLists"`
	NextPageToken *string        `json:"nextPageToken"`
}
