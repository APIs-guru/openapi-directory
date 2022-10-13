package shared

type MetricThresholdComparisonEnum string

const (
	MetricThresholdComparisonEnumComparisonUnspecified MetricThresholdComparisonEnum = "COMPARISON_UNSPECIFIED"
	MetricThresholdComparisonEnumComparisonGt          MetricThresholdComparisonEnum = "COMPARISON_GT"
	MetricThresholdComparisonEnumComparisonGe          MetricThresholdComparisonEnum = "COMPARISON_GE"
	MetricThresholdComparisonEnumComparisonLt          MetricThresholdComparisonEnum = "COMPARISON_LT"
	MetricThresholdComparisonEnumComparisonLe          MetricThresholdComparisonEnum = "COMPARISON_LE"
	MetricThresholdComparisonEnumComparisonEq          MetricThresholdComparisonEnum = "COMPARISON_EQ"
	MetricThresholdComparisonEnumComparisonNe          MetricThresholdComparisonEnum = "COMPARISON_NE"
)

type MetricThresholdEvaluationMissingDataEnum string

const (
	MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataUnspecified MetricThresholdEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_UNSPECIFIED"
	MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataInactive    MetricThresholdEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_INACTIVE"
	MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataActive      MetricThresholdEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_ACTIVE"
	MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataNoOp        MetricThresholdEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_NO_OP"
)

type MetricThreshold struct {
	Aggregations            []Aggregation                             `json:"aggregations"`
	Comparison              *MetricThresholdComparisonEnum            `json:"comparison"`
	DenominatorAggregations []Aggregation                             `json:"denominatorAggregations"`
	DenominatorFilter       *string                                   `json:"denominatorFilter"`
	Duration                *string                                   `json:"duration"`
	EvaluationMissingData   *MetricThresholdEvaluationMissingDataEnum `json:"evaluationMissingData"`
	Filter                  *string                                   `json:"filter"`
	ThresholdValue          *float64                                  `json:"thresholdValue"`
	Trigger                 *Trigger                                  `json:"trigger"`
}
