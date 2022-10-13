package shared

type GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics struct {
	Metrics      []GoogleCloudDialogflowCxV3beta1ExperimentResultMetric `json:"metrics"`
	SessionCount *int32                                                 `json:"sessionCount"`
	Version      *string                                                `json:"version"`
}
