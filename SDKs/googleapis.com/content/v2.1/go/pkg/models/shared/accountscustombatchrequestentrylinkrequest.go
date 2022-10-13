package shared

type AccountsCustomBatchRequestEntryLinkRequest struct {
	Action          *string  `json:"action"`
	LinkType        *string  `json:"linkType"`
	LinkedAccountID *string  `json:"linkedAccountId"`
	Services        []string `json:"services"`
}
