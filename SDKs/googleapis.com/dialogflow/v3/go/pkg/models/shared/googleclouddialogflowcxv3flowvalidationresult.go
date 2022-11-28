package shared

// GoogleCloudDialogflowCxV3FlowValidationResult
// The response message for Flows.GetFlowValidationResult.
type GoogleCloudDialogflowCxV3FlowValidationResult struct {
	Name               *string                                      `json:"name,omitempty"`
	UpdateTime         *string                                      `json:"updateTime,omitempty"`
	ValidationMessages []GoogleCloudDialogflowCxV3ValidationMessage `json:"validationMessages,omitempty"`
}
