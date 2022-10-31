package shared



type CommentList struct {
    Items []Comment `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextLink *string `json:"nextLink,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    
}

