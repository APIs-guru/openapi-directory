package shared

// GoogleCloudDialogflowCxV3ExperimentResult
// The inference result which includes an objective metric to optimize and the confidence interval.
type GoogleCloudDialogflowCxV3ExperimentResult struct {
	LastUpdateTime *string                                                   `json:"lastUpdateTime,omitempty"`
	VersionMetrics []GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics `json:"versionMetrics,omitempty"`
}
