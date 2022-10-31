package shared

type BucketByTimePeriodTypeEnum string

const (
	BucketByTimePeriodTypeEnumDay   BucketByTimePeriodTypeEnum = "day"
	BucketByTimePeriodTypeEnumWeek  BucketByTimePeriodTypeEnum = "week"
	BucketByTimePeriodTypeEnumMonth BucketByTimePeriodTypeEnum = "month"
)

type BucketByTimePeriod struct {
	TimeZoneID *string                     `json:"timeZoneId,omitempty"`
	Type       *BucketByTimePeriodTypeEnum `json:"type,omitempty"`
	Value      *int32                      `json:"value,omitempty"`
}
