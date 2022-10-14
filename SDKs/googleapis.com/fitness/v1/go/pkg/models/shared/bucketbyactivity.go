package shared

type BucketByActivity struct {
	ActivityDataSourceID *string `json:"activityDataSourceId,omitempty"`
	MinDurationMillis    *string `json:"minDurationMillis,omitempty"`
}
