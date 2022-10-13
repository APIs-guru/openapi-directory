package shared

type GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes"`
	Suggestion *string                                            `json:"suggestion"`
}
