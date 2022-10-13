package shared

type AccountsLinkRequest struct {
	Action          *string `json:"action"`
	LinkType        *string `json:"linkType"`
	LinkedAccountID *string `json:"linkedAccountId"`
}
