package shared



type ChangePlanRequest struct {
    DealCode *string `json:"dealCode,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PlanName *string `json:"planName,omitempty"`
    PurchaseOrderID *string `json:"purchaseOrderId,omitempty"`
    Seats *Seats `json:"seats,omitempty"`
    
}

