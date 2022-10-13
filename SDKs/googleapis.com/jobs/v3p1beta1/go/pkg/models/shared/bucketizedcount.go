package shared

type BucketizedCount struct {
	Count *int32       `json:"count"`
	Range *BucketRange `json:"range"`
}
