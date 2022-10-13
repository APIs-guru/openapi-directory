package shared

type LinksConversationSelf struct {
	Href *string `json:"href"`
}

type LinksConversation struct {
	Self *LinksConversationSelf `json:"self"`
}
