package shared

// GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
// A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
type GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket struct {
	BucketSize       *string                                                  `json:"bucketSize,omitempty"`
	BucketValueCount *string                                                  `json:"bucketValueCount,omitempty"`
	BucketValues     []GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues `json:"bucketValues,omitempty"`
	MaxProbability   *float64                                                 `json:"maxProbability,omitempty"`
	MinProbability   *float64                                                 `json:"minProbability,omitempty"`
}
