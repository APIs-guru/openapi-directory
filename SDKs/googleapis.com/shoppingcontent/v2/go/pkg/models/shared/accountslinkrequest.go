package shared



type AccountsLinkRequest struct {
    Action *string `json:"action,omitempty"`
    LinkType *string `json:"linkType,omitempty"`
    LinkedAccountID *string `json:"linkedAccountId,omitempty"`
    
}

