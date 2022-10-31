package shared



type ThirdPartyLink struct {
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LinkingToken *string `json:"linkingToken,omitempty"`
    Snippet *ThirdPartyLinkSnippet `json:"snippet,omitempty"`
    Status *ThirdPartyLinkStatus `json:"status,omitempty"`
    
}

