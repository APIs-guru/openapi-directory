package shared

// GoogleCloudDialogflowCxV3beta1ExperimentResult
// The inference result which includes an objective metric to optimize and the confidence interval.
type GoogleCloudDialogflowCxV3beta1ExperimentResult struct {
	LastUpdateTime *string                                                        `json:"lastUpdateTime,omitempty"`
	VersionMetrics []GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics `json:"versionMetrics,omitempty"`
}
