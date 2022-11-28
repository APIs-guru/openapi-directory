package shared

// GoogleCloudDialogflowCxV3beta1IntentCoverage
// Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
type GoogleCloudDialogflowCxV3beta1IntentCoverage struct {
	CoverageScore *float32                                             `json:"coverageScore,omitempty"`
	Intents       []GoogleCloudDialogflowCxV3beta1IntentCoverageIntent `json:"intents,omitempty"`
}
