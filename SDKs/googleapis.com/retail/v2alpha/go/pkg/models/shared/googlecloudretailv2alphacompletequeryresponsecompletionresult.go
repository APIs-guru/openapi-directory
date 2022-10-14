package shared

type GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
	Suggestion *string                                            `json:"suggestion,omitempty"`
}
