package shared

type GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket struct {
	BucketSize       *string                                                  `json:"bucketSize"`
	BucketValueCount *string                                                  `json:"bucketValueCount"`
	BucketValues     []GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues `json:"bucketValues"`
	MaxProbability   *float64                                                 `json:"maxProbability"`
	MinProbability   *float64                                                 `json:"minProbability"`
}
