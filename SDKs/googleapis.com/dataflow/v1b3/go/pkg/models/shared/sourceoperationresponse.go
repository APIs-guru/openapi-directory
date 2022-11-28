package shared

// SourceOperationResponse
// The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
type SourceOperationResponse struct {
	GetMetadata *SourceGetMetadataResponse `json:"getMetadata,omitempty"`
	Split       *SourceSplitResponse       `json:"split,omitempty"`
}
