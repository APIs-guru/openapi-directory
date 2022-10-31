package shared



type LinksConversationSelf struct {
    Href *string `json:"href,omitempty"`
    
}

type LinksConversation struct {
    Self *LinksConversationSelf `json:"self,omitempty"`
    
}

