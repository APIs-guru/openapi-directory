package shared

type GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum string

const (
	GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumStatisticUndefined GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum = "STATISTIC_UNDEFINED"
	GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMean               GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum = "MEAN"
	GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMin                GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum = "MIN"
	GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMax                GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum = "MAX"
)

// GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation
// Evaluates whether the column aggregate statistic lies between a specified range.
type GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation struct {
	MaxValue         *string                                                                     `json:"maxValue,omitempty"`
	MinValue         *string                                                                     `json:"minValue,omitempty"`
	Statistic        *GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum `json:"statistic,omitempty"`
	StrictMaxEnabled *bool                                                                       `json:"strictMaxEnabled,omitempty"`
	StrictMinEnabled *bool                                                                       `json:"strictMinEnabled,omitempty"`
}
