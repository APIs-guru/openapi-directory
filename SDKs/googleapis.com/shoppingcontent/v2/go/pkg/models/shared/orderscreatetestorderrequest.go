package shared



type OrdersCreateTestOrderRequest struct {
    Country *string `json:"country,omitempty"`
    TemplateName *string `json:"templateName,omitempty"`
    TestOrder *TestOrder `json:"testOrder,omitempty"`
    
}

