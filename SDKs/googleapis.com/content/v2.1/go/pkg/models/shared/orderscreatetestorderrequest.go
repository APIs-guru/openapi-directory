package shared

type OrdersCreateTestOrderRequest struct {
	Country      *string    `json:"country"`
	TemplateName *string    `json:"templateName"`
	TestOrder    *TestOrder `json:"testOrder"`
}
