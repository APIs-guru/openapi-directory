package shared



type GooglePrivacyDlpV2CloudStorageRegexFileSet struct {
    BucketName *string `json:"bucketName,omitempty"`
    ExcludeRegex []string `json:"excludeRegex,omitempty"`
    IncludeRegex []string `json:"includeRegex,omitempty"`
    
}

