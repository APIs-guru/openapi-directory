package shared

// GoogleCloudDataplexV1DataQualityRule
// A rule captures data quality intent about a data source.
type GoogleCloudDataplexV1DataQualityRule struct {
	Column                    *string                                                        `json:"column,omitempty"`
	Dimension                 *string                                                        `json:"dimension,omitempty"`
	IgnoreNull                *bool                                                          `json:"ignoreNull,omitempty"`
	NonNullExpectation        map[string]interface{}                                         `json:"nonNullExpectation,omitempty"`
	RangeExpectation          *GoogleCloudDataplexV1DataQualityRuleRangeExpectation          `json:"rangeExpectation,omitempty"`
	RegexExpectation          *GoogleCloudDataplexV1DataQualityRuleRegexExpectation          `json:"regexExpectation,omitempty"`
	RowConditionExpectation   *GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation   `json:"rowConditionExpectation,omitempty"`
	SetExpectation            *GoogleCloudDataplexV1DataQualityRuleSetExpectation            `json:"setExpectation,omitempty"`
	StatisticRangeExpectation *GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation `json:"statisticRangeExpectation,omitempty"`
	TableConditionExpectation *GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation `json:"tableConditionExpectation,omitempty"`
	Threshold                 *float64                                                       `json:"threshold,omitempty"`
	UniquenessExpectation     map[string]interface{}                                         `json:"uniquenessExpectation,omitempty"`
}
