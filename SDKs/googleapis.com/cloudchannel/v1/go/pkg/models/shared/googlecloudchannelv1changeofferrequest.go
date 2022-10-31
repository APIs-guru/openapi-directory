package shared



type GoogleCloudChannelV1ChangeOfferRequest struct {
    Offer *string `json:"offer,omitempty"`
    Parameters []GoogleCloudChannelV1Parameter `json:"parameters,omitempty"`
    PurchaseOrderID *string `json:"purchaseOrderId,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

