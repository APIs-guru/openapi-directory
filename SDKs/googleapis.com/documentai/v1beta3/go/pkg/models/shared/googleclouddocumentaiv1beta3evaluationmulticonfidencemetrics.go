package shared

type GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum string

const (
	GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnumMetricsTypeUnspecified GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum = "METRICS_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnumAggregate              GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum = "AGGREGATE"
)

// GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics
// Metrics across multiple confidence levels.
type GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics struct {
	Auprc                          *float32                                                                     `json:"auprc,omitempty"`
	AuprcExact                     *float32                                                                     `json:"auprcExact,omitempty"`
	ConfidenceLevelMetrics         []GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics               `json:"confidenceLevelMetrics,omitempty"`
	ConfidenceLevelMetricsExact    []GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics               `json:"confidenceLevelMetricsExact,omitempty"`
	EstimatedCalibrationError      *float32                                                                     `json:"estimatedCalibrationError,omitempty"`
	EstimatedCalibrationErrorExact *float32                                                                     `json:"estimatedCalibrationErrorExact,omitempty"`
	MetricsType                    *GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum `json:"metricsType,omitempty"`
}
