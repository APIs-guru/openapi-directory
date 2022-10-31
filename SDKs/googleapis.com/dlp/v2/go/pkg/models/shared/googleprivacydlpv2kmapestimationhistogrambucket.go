package shared



type GooglePrivacyDlpV2KMapEstimationHistogramBucket struct {
    BucketSize *string `json:"bucketSize,omitempty"`
    BucketValueCount *string `json:"bucketValueCount,omitempty"`
    BucketValues []GooglePrivacyDlpV2KMapEstimationQuasiIDValues `json:"bucketValues,omitempty"`
    MaxAnonymity *string `json:"maxAnonymity,omitempty"`
    MinAnonymity *string `json:"minAnonymity,omitempty"`
    
}

