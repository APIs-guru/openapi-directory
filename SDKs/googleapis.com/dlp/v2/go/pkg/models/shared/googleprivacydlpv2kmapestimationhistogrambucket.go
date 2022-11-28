package shared

// GooglePrivacyDlpV2KMapEstimationHistogramBucket
// A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
type GooglePrivacyDlpV2KMapEstimationHistogramBucket struct {
	BucketSize       *string                                         `json:"bucketSize,omitempty"`
	BucketValueCount *string                                         `json:"bucketValueCount,omitempty"`
	BucketValues     []GooglePrivacyDlpV2KMapEstimationQuasiIDValues `json:"bucketValues,omitempty"`
	MaxAnonymity     *string                                         `json:"maxAnonymity,omitempty"`
	MinAnonymity     *string                                         `json:"minAnonymity,omitempty"`
}
