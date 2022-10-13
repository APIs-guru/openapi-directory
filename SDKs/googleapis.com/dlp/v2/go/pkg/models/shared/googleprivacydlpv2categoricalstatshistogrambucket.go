package shared

type GooglePrivacyDlpV2CategoricalStatsHistogramBucket struct {
	BucketSize               *string                            `json:"bucketSize"`
	BucketValueCount         *string                            `json:"bucketValueCount"`
	BucketValues             []GooglePrivacyDlpV2ValueFrequency `json:"bucketValues"`
	ValueFrequencyLowerBound *string                            `json:"valueFrequencyLowerBound"`
	ValueFrequencyUpperBound *string                            `json:"valueFrequencyUpperBound"`
}
