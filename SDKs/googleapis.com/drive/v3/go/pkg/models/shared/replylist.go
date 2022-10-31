package shared



type ReplyList struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Replies []Reply `json:"replies,omitempty"`
    
}

