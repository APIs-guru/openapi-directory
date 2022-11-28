package shared

// GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult
// Resource that represents completion results.
type GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes,omitempty"`
	Suggestion *string                                           `json:"suggestion,omitempty"`
}
