package shared



type GooglePrivacyDlpV2FixedSizeBucketingConfig struct {
    BucketSize *float64 `json:"bucketSize,omitempty"`
    LowerBound *GooglePrivacyDlpV2Value `json:"lowerBound,omitempty"`
    UpperBound *GooglePrivacyDlpV2Value `json:"upperBound,omitempty"`
    
}

