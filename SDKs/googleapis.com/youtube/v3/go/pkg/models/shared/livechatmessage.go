package shared



type LiveChatMessage struct {
    AuthorDetails *LiveChatMessageAuthorDetails `json:"authorDetails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Snippet *LiveChatMessageSnippet `json:"snippet,omitempty"`
    
}

