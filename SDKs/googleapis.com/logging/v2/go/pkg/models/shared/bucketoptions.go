package shared



type BucketOptions struct {
    ExplicitBuckets *Explicit `json:"explicitBuckets,omitempty"`
    ExponentialBuckets *Exponential `json:"exponentialBuckets,omitempty"`
    LinearBuckets *Linear `json:"linearBuckets,omitempty"`
    
}

