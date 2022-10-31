package shared



type CommentList struct {
    Etag *string `json:"etag,omitempty"`
    Items []Comment `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PrevPageToken *string `json:"prevPageToken,omitempty"`
    
}

