package shared

type GooglePrivacyDlpV2LDiversityHistogramBucket struct {
	BucketSize                        *string                                        `json:"bucketSize"`
	BucketValueCount                  *string                                        `json:"bucketValueCount"`
	BucketValues                      []GooglePrivacyDlpV2LDiversityEquivalenceClass `json:"bucketValues"`
	SensitiveValueFrequencyLowerBound *string                                        `json:"sensitiveValueFrequencyLowerBound"`
	SensitiveValueFrequencyUpperBound *string                                        `json:"sensitiveValueFrequencyUpperBound"`
}
