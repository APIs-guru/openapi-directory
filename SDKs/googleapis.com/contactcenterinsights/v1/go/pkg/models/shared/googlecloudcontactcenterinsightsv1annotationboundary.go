package shared

// GoogleCloudContactcenterinsightsV1AnnotationBoundary
// A point in a conversation that marks the start or the end of an annotation.
type GoogleCloudContactcenterinsightsV1AnnotationBoundary struct {
	TranscriptIndex *int32 `json:"transcriptIndex,omitempty"`
	WordIndex       *int32 `json:"wordIndex,omitempty"`
}
