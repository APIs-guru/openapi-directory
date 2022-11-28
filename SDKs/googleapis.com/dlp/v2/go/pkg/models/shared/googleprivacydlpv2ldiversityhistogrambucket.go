package shared

// GooglePrivacyDlpV2LDiversityHistogramBucket
// Histogram of l-diversity equivalence class sensitive value frequencies.
type GooglePrivacyDlpV2LDiversityHistogramBucket struct {
	BucketSize                        *string                                        `json:"bucketSize,omitempty"`
	BucketValueCount                  *string                                        `json:"bucketValueCount,omitempty"`
	BucketValues                      []GooglePrivacyDlpV2LDiversityEquivalenceClass `json:"bucketValues,omitempty"`
	SensitiveValueFrequencyLowerBound *string                                        `json:"sensitiveValueFrequencyLowerBound,omitempty"`
	SensitiveValueFrequencyUpperBound *string                                        `json:"sensitiveValueFrequencyUpperBound,omitempty"`
}
