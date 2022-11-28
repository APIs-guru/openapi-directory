package shared

// GoogleCloudDialogflowCxV3IntentCoverage
// Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
type GoogleCloudDialogflowCxV3IntentCoverage struct {
	CoverageScore *float32                                        `json:"coverageScore,omitempty"`
	Intents       []GoogleCloudDialogflowCxV3IntentCoverageIntent `json:"intents,omitempty"`
}
