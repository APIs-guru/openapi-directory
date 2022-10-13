package shared

type BucketOptions struct {
	ExplicitBuckets    *Explicit    `json:"explicitBuckets"`
	ExponentialBuckets *Exponential `json:"exponentialBuckets"`
	LinearBuckets      *Linear      `json:"linearBuckets"`
}
