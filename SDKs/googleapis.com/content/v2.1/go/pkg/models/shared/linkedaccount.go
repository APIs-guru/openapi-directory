package shared

type LinkedAccount struct {
	LinkedAccountID *string       `json:"linkedAccountId"`
	Services        []LinkService `json:"services"`
}
