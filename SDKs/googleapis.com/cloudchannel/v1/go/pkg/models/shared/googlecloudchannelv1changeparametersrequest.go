package shared



type GoogleCloudChannelV1ChangeParametersRequest struct {
    Parameters []GoogleCloudChannelV1Parameter `json:"parameters,omitempty"`
    PurchaseOrderID *string `json:"purchaseOrderId,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

