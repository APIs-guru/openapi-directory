package shared

type AccountUser struct {
	Admin           *bool   `json:"admin,omitempty"`
	EmailAddress    *string `json:"emailAddress,omitempty"`
	OrderManager    *bool   `json:"orderManager,omitempty"`
	PaymentsAnalyst *bool   `json:"paymentsAnalyst,omitempty"`
	PaymentsManager *bool   `json:"paymentsManager,omitempty"`
}
