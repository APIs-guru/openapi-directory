package shared

type AggregateRequestFilteredDataQualityStandardEnum string

const (
	AggregateRequestFilteredDataQualityStandardEnumDataQualityUnknown                  AggregateRequestFilteredDataQualityStandardEnum = "dataQualityUnknown"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureEsh2002     AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureEsh2002"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureEsh2010     AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureEsh2010"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureAami        AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureAami"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureBhsAa       AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureBhsAA"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureBhsAb       AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureBhsAB"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureBhsBa       AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureBhsBA"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodPressureBhsBb       AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodPressureBhsBB"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodGlucoseIso151972003 AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodGlucoseIso151972003"
	AggregateRequestFilteredDataQualityStandardEnumDataQualityBloodGlucoseIso151972013 AggregateRequestFilteredDataQualityStandardEnum = "dataQualityBloodGlucoseIso151972013"
)

// AggregateRequest
// Next id: 10
type AggregateRequest struct {
	AggregateBy                 []AggregateBy                                     `json:"aggregateBy,omitempty"`
	BucketByActivitySegment     *BucketByActivity                                 `json:"bucketByActivitySegment,omitempty"`
	BucketByActivityType        *BucketByActivity                                 `json:"bucketByActivityType,omitempty"`
	BucketBySession             *BucketBySession                                  `json:"bucketBySession,omitempty"`
	BucketByTime                *BucketByTime                                     `json:"bucketByTime,omitempty"`
	EndTimeMillis               *string                                           `json:"endTimeMillis,omitempty"`
	FilteredDataQualityStandard []AggregateRequestFilteredDataQualityStandardEnum `json:"filteredDataQualityStandard,omitempty"`
	StartTimeMillis             *string                                           `json:"startTimeMillis,omitempty"`
}
