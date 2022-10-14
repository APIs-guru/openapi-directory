package shared

type GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket struct {
	BucketSize       *string                                                  `json:"bucketSize,omitempty"`
	BucketValueCount *string                                                  `json:"bucketValueCount,omitempty"`
	BucketValues     []GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues `json:"bucketValues,omitempty"`
	MaxProbability   *float64                                                 `json:"maxProbability,omitempty"`
	MinProbability   *float64                                                 `json:"minProbability,omitempty"`
}
