package shared

// GoogleCloudChannelV1ChangeParametersRequestInput
// Request message for CloudChannelService.ChangeParametersRequest.
type GoogleCloudChannelV1ChangeParametersRequestInput struct {
	Parameters      []GoogleCloudChannelV1ParameterInput `json:"parameters,omitempty"`
	PurchaseOrderID *string                              `json:"purchaseOrderId,omitempty"`
	RequestID       *string                              `json:"requestId,omitempty"`
}
