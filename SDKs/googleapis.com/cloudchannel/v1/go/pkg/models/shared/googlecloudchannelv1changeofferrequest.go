package shared

type GoogleCloudChannelV1ChangeOfferRequest struct {
	Offer           *string                         `json:"offer"`
	Parameters      []GoogleCloudChannelV1Parameter `json:"parameters"`
	PurchaseOrderID *string                         `json:"purchaseOrderId"`
	RequestID       *string                         `json:"requestId"`
}
