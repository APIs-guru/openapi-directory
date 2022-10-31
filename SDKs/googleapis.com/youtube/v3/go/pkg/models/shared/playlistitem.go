package shared



type PlaylistItem struct {
    ContentDetails *PlaylistItemContentDetails `json:"contentDetails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Snippet *PlaylistItemSnippet `json:"snippet,omitempty"`
    Status *PlaylistItemStatus `json:"status,omitempty"`
    
}

