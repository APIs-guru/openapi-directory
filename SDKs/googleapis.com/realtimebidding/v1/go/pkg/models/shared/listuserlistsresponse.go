package shared

// ListUserListsResponse
// The list user list response.
type ListUserListsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	UserLists     []UserList `json:"userLists,omitempty"`
}
