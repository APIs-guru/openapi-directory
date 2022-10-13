package shared

type OrdersGetTestOrderTemplateResponse struct {
	Kind     *string    `json:"kind"`
	Template *TestOrder `json:"template"`
}
