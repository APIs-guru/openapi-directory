package shared



type SuperChatEvent struct {
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Snippet *SuperChatEventSnippet `json:"snippet,omitempty"`
    
}

