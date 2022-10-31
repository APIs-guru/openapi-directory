package shared

type BucketByTime struct {
	DurationMillis *string             `json:"durationMillis,omitempty"`
	Period         *BucketByTimePeriod `json:"period,omitempty"`
}
