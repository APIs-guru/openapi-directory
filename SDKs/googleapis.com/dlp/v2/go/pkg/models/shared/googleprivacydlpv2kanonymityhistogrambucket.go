package shared

type GooglePrivacyDlpV2KAnonymityHistogramBucket struct {
	BucketSize                     *string                                        `json:"bucketSize"`
	BucketValueCount               *string                                        `json:"bucketValueCount"`
	BucketValues                   []GooglePrivacyDlpV2KAnonymityEquivalenceClass `json:"bucketValues"`
	EquivalenceClassSizeLowerBound *string                                        `json:"equivalenceClassSizeLowerBound"`
	EquivalenceClassSizeUpperBound *string                                        `json:"equivalenceClassSizeUpperBound"`
}
