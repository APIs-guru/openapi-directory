package shared

type BucketByTime struct {
	DurationMillis *string             `json:"durationMillis"`
	Period         *BucketByTimePeriod `json:"period"`
}
