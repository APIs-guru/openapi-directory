package shared



type Caption struct {
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Snippet *CaptionSnippet `json:"snippet,omitempty"`
    
}

