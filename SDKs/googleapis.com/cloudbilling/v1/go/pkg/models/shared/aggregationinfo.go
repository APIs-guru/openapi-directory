package shared

type AggregationInfoAggregationIntervalEnum string

const (
	AggregationInfoAggregationIntervalEnumAggregationIntervalUnspecified AggregationInfoAggregationIntervalEnum = "AGGREGATION_INTERVAL_UNSPECIFIED"
	AggregationInfoAggregationIntervalEnumDaily                          AggregationInfoAggregationIntervalEnum = "DAILY"
	AggregationInfoAggregationIntervalEnumMonthly                        AggregationInfoAggregationIntervalEnum = "MONTHLY"
)

type AggregationInfoAggregationLevelEnum string

const (
	AggregationInfoAggregationLevelEnumAggregationLevelUnspecified AggregationInfoAggregationLevelEnum = "AGGREGATION_LEVEL_UNSPECIFIED"
	AggregationInfoAggregationLevelEnumAccount                     AggregationInfoAggregationLevelEnum = "ACCOUNT"
	AggregationInfoAggregationLevelEnumProject                     AggregationInfoAggregationLevelEnum = "PROJECT"
)

type AggregationInfo struct {
	AggregationCount    *int32                                  `json:"aggregationCount,omitempty"`
	AggregationInterval *AggregationInfoAggregationIntervalEnum `json:"aggregationInterval,omitempty"`
	AggregationLevel    *AggregationInfoAggregationLevelEnum    `json:"aggregationLevel,omitempty"`
}
