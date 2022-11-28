package shared

// GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics
// Version variant and associated metrics.
type GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics struct {
	Metrics      []GoogleCloudDialogflowCxV3ExperimentResultMetric `json:"metrics,omitempty"`
	SessionCount *int32                                            `json:"sessionCount,omitempty"`
	Version      *string                                           `json:"version,omitempty"`
}
