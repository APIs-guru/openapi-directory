package shared

type BucketByActivity struct {
	ActivityDataSourceID *string `json:"activityDataSourceId"`
	MinDurationMillis    *string `json:"minDurationMillis"`
}
