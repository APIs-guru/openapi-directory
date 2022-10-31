package shared



type ListUserListsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UserLists []UserList `json:"userLists,omitempty"`
    
}

