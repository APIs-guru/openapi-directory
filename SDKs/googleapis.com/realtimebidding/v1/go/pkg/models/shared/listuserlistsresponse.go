package shared

type ListUserListsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	UserLists     []UserList `json:"userLists"`
}
