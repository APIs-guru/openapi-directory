package shared

type AccountsCustomBatchRequestEntryLinkRequest struct {
	Action          *string  `json:"action,omitempty"`
	LinkType        *string  `json:"linkType,omitempty"`
	LinkedAccountID *string  `json:"linkedAccountId,omitempty"`
	Services        []string `json:"services,omitempty"`
}
