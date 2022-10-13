package shared

type AccountUser struct {
	Admin           *bool   `json:"admin"`
	EmailAddress    *string `json:"emailAddress"`
	OrderManager    *bool   `json:"orderManager"`
	PaymentsAnalyst *bool   `json:"paymentsAnalyst"`
	PaymentsManager *bool   `json:"paymentsManager"`
}
