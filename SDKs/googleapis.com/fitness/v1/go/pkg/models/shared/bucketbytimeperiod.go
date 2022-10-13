package shared

type BucketByTimePeriodTypeEnum string

const (
	BucketByTimePeriodTypeEnumDay   BucketByTimePeriodTypeEnum = "day"
	BucketByTimePeriodTypeEnumWeek  BucketByTimePeriodTypeEnum = "week"
	BucketByTimePeriodTypeEnumMonth BucketByTimePeriodTypeEnum = "month"
)

type BucketByTimePeriod struct {
	TimeZoneID *string                     `json:"timeZoneId"`
	Type       *BucketByTimePeriodTypeEnum `json:"type"`
	Value      *int32                      `json:"value"`
}
