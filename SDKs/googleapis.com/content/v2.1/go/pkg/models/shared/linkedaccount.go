package shared

type LinkedAccount struct {
	LinkedAccountID *string       `json:"linkedAccountId,omitempty"`
	Services        []LinkService `json:"services,omitempty"`
}
