package shared

// GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult
// Resource that represents completion results.
type GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
	Suggestion *string                                            `json:"suggestion,omitempty"`
}
