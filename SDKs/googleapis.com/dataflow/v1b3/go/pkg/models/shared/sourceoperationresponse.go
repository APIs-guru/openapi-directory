package shared

type SourceOperationResponse struct {
	GetMetadata *SourceGetMetadataResponse `json:"getMetadata"`
	Split       *SourceSplitResponse       `json:"split"`
}
