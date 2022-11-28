package shared

// GoogleCloudDialogflowCxV3beta1FlowValidationResult
// The response message for Flows.GetFlowValidationResult.
type GoogleCloudDialogflowCxV3beta1FlowValidationResult struct {
	Name               *string                                           `json:"name,omitempty"`
	UpdateTime         *string                                           `json:"updateTime,omitempty"`
	ValidationMessages []GoogleCloudDialogflowCxV3beta1ValidationMessage `json:"validationMessages,omitempty"`
}
