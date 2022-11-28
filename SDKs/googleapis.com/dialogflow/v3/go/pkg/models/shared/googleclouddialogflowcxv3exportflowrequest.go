package shared

// GoogleCloudDialogflowCxV3ExportFlowRequest
// The request message for Flows.ExportFlow.
type GoogleCloudDialogflowCxV3ExportFlowRequest struct {
	FlowURI                *string `json:"flowUri,omitempty"`
	IncludeReferencedFlows *bool   `json:"includeReferencedFlows,omitempty"`
}
