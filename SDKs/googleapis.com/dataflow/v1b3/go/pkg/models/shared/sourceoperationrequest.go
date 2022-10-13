package shared

type SourceOperationRequest struct {
	GetMetadata  *SourceGetMetadataRequest `json:"getMetadata"`
	Name         *string                   `json:"name"`
	OriginalName *string                   `json:"originalName"`
	Split        *SourceSplitRequest       `json:"split"`
	StageName    *string                   `json:"stageName"`
	SystemName   *string                   `json:"systemName"`
}
