package shared

type OrdersGetTestOrderTemplateResponse struct {
	Kind     *string    `json:"kind,omitempty"`
	Template *TestOrder `json:"template,omitempty"`
}
