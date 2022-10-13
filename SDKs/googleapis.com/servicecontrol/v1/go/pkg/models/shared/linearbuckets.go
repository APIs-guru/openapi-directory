package shared

type LinearBuckets struct {
	NumFiniteBuckets *int32   `json:"numFiniteBuckets"`
	Offset           *float64 `json:"offset"`
	Width            *float64 `json:"width"`
}
