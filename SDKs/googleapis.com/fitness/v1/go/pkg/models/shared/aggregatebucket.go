package shared

type AggregateBucketTypeEnum string

const (
	AggregateBucketTypeEnumUnknown         AggregateBucketTypeEnum = "unknown"
	AggregateBucketTypeEnumTime            AggregateBucketTypeEnum = "time"
	AggregateBucketTypeEnumSession         AggregateBucketTypeEnum = "session"
	AggregateBucketTypeEnumActivityType    AggregateBucketTypeEnum = "activityType"
	AggregateBucketTypeEnumActivitySegment AggregateBucketTypeEnum = "activitySegment"
)

type AggregateBucket struct {
	Activity        *int32                   `json:"activity"`
	Dataset         []Dataset                `json:"dataset"`
	EndTimeMillis   *string                  `json:"endTimeMillis"`
	Session         *Session                 `json:"session"`
	StartTimeMillis *string                  `json:"startTimeMillis"`
	Type            *AggregateBucketTypeEnum `json:"type"`
}
