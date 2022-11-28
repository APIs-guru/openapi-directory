package shared

// GoogleCloudChannelV1ChangeOfferRequestInput
// Request message for CloudChannelService.ChangeOffer.
type GoogleCloudChannelV1ChangeOfferRequestInput struct {
	Offer           *string                              `json:"offer,omitempty"`
	Parameters      []GoogleCloudChannelV1ParameterInput `json:"parameters,omitempty"`
	PurchaseOrderID *string                              `json:"purchaseOrderId,omitempty"`
	RequestID       *string                              `json:"requestId,omitempty"`
}
