package shared

// GoogleCloudRetailV2CompleteQueryResponseCompletionResult
// Resource that represents completion results.
type GoogleCloudRetailV2CompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes,omitempty"`
	Suggestion *string                                       `json:"suggestion,omitempty"`
}
