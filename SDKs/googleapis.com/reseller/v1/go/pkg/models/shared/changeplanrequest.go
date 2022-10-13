package shared

type ChangePlanRequest struct {
	DealCode        *string `json:"dealCode"`
	Kind            *string `json:"kind"`
	PlanName        *string `json:"planName"`
	PurchaseOrderID *string `json:"purchaseOrderId"`
	Seats           *Seats  `json:"seats"`
}
