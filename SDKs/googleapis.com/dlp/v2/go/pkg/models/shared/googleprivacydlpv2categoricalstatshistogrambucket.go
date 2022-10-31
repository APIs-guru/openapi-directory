package shared



type GooglePrivacyDlpV2CategoricalStatsHistogramBucket struct {
    BucketSize *string `json:"bucketSize,omitempty"`
    BucketValueCount *string `json:"bucketValueCount,omitempty"`
    BucketValues []GooglePrivacyDlpV2ValueFrequency `json:"bucketValues,omitempty"`
    ValueFrequencyLowerBound *string `json:"valueFrequencyLowerBound,omitempty"`
    ValueFrequencyUpperBound *string `json:"valueFrequencyUpperBound,omitempty"`
    
}

