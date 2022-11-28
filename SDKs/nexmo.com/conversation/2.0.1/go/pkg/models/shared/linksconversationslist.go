package shared

type LinksConversationsListSelf struct {
	Href string `json:"href"`
}

// LinksConversationsList
// A series of links between resources in this API in the http://stateless.co/hal_specification.html.
type LinksConversationsList struct {
	Self LinksConversationsListSelf `json:"self"`
}
