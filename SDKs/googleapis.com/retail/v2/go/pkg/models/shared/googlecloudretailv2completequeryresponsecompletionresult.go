package shared

type GoogleCloudRetailV2CompleteQueryResponseCompletionResult struct {
	Attributes map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes"`
	Suggestion *string                                       `json:"suggestion"`
}
