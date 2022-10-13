package shared

type GoogleCloudDialogflowCxV3IntentCoverage struct {
	CoverageScore *float32                                        `json:"coverageScore"`
	Intents       []GoogleCloudDialogflowCxV3IntentCoverageIntent `json:"intents"`
}
