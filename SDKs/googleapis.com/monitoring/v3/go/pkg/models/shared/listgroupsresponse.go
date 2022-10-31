package shared



type ListGroupsResponse struct {
    Group []Group `json:"group,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

