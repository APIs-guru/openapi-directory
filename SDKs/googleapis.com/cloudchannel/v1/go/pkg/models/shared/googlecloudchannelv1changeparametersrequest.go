package shared

type GoogleCloudChannelV1ChangeParametersRequest struct {
	Parameters      []GoogleCloudChannelV1Parameter `json:"parameters"`
	PurchaseOrderID *string                         `json:"purchaseOrderId"`
	RequestID       *string                         `json:"requestId"`
}
