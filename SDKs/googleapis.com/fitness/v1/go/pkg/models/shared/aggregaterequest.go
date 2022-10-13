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

type AggregateRequest struct {
	AggregateBy                 []AggregateBy                                     `json:"aggregateBy"`
	BucketByActivitySegment     *BucketByActivity                                 `json:"bucketByActivitySegment"`
	BucketByActivityType        *BucketByActivity                                 `json:"bucketByActivityType"`
	BucketBySession             *BucketBySession                                  `json:"bucketBySession"`
	BucketByTime                *BucketByTime                                     `json:"bucketByTime"`
	EndTimeMillis               *string                                           `json:"endTimeMillis"`
	FilteredDataQualityStandard []AggregateRequestFilteredDataQualityStandardEnum `json:"filteredDataQualityStandard"`
	StartTimeMillis             *string                                           `json:"startTimeMillis"`
}
