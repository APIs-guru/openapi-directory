package shared

type GooglePrivacyDlpV2KMapEstimationHistogramBucket struct {
	BucketSize       *string                                         `json:"bucketSize"`
	BucketValueCount *string                                         `json:"bucketValueCount"`
	BucketValues     []GooglePrivacyDlpV2KMapEstimationQuasiIDValues `json:"bucketValues"`
	MaxAnonymity     *string                                         `json:"maxAnonymity"`
	MinAnonymity     *string                                         `json:"minAnonymity"`
}
