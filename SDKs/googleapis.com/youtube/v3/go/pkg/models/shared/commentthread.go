package shared



type CommentThread struct {
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Replies *CommentThreadReplies `json:"replies,omitempty"`
    Snippet *CommentThreadSnippet `json:"snippet,omitempty"`
    
}

