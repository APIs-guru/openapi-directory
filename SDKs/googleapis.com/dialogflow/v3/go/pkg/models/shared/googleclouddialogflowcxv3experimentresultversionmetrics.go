package shared

type GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics struct {
	Metrics      []GoogleCloudDialogflowCxV3ExperimentResultMetric `json:"metrics"`
	SessionCount *int32                                            `json:"sessionCount"`
	Version      *string                                           `json:"version"`
}
