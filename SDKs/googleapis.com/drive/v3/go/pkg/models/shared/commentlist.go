package shared



type CommentList struct {
    Comments []Comment `json:"comments,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

