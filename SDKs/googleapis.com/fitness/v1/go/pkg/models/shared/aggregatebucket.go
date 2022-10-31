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
	Activity        *int32                   `json:"activity,omitempty"`
	Dataset         []Dataset                `json:"dataset,omitempty"`
	EndTimeMillis   *string                  `json:"endTimeMillis,omitempty"`
	Session         *Session                 `json:"session,omitempty"`
	StartTimeMillis *string                  `json:"startTimeMillis,omitempty"`
	Type            *AggregateBucketTypeEnum `json:"type,omitempty"`
}
