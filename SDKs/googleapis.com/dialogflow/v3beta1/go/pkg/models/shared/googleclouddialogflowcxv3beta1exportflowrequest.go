package shared

// GoogleCloudDialogflowCxV3beta1ExportFlowRequest
// The request message for Flows.ExportFlow.
type GoogleCloudDialogflowCxV3beta1ExportFlowRequest struct {
	FlowURI                *string `json:"flowUri,omitempty"`
	IncludeReferencedFlows *bool   `json:"includeReferencedFlows,omitempty"`
}
