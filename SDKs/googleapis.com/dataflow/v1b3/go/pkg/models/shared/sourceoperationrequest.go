package shared

// SourceOperationRequest
// A work item that represents the different operations that can be performed on a user-defined Source specification.
type SourceOperationRequest struct {
	GetMetadata  *SourceGetMetadataRequest `json:"getMetadata,omitempty"`
	Name         *string                   `json:"name,omitempty"`
	OriginalName *string                   `json:"originalName,omitempty"`
	Split        *SourceSplitRequest       `json:"split,omitempty"`
	StageName    *string                   `json:"stageName,omitempty"`
	SystemName   *string                   `json:"systemName,omitempty"`
}
