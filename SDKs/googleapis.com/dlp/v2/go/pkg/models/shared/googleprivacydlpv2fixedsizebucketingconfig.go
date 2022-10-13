package shared

type GooglePrivacyDlpV2FixedSizeBucketingConfig struct {
	BucketSize *float64                 `json:"bucketSize"`
	LowerBound *GooglePrivacyDlpV2Value `json:"lowerBound"`
	UpperBound *GooglePrivacyDlpV2Value `json:"upperBound"`
}
