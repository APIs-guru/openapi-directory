package shared

type GoogleCloudDialogflowCxV3beta1IntentCoverage struct {
	CoverageScore *float32                                             `json:"coverageScore"`
	Intents       []GoogleCloudDialogflowCxV3beta1IntentCoverageIntent `json:"intents"`
}
