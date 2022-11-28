package shared

// GooglePrivacyDlpV2KAnonymityHistogramBucket
// Histogram of k-anonymity equivalence classes.
type GooglePrivacyDlpV2KAnonymityHistogramBucket struct {
	BucketSize                     *string                                        `json:"bucketSize,omitempty"`
	BucketValueCount               *string                                        `json:"bucketValueCount,omitempty"`
	BucketValues                   []GooglePrivacyDlpV2KAnonymityEquivalenceClass `json:"bucketValues,omitempty"`
	EquivalenceClassSizeLowerBound *string                                        `json:"equivalenceClassSizeLowerBound,omitempty"`
	EquivalenceClassSizeUpperBound *string                                        `json:"equivalenceClassSizeUpperBound,omitempty"`
}
