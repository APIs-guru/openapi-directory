package shared

type GooglePrivacyDlpV2CloudStorageRegexFileSet struct {
	BucketName   *string  `json:"bucketName"`
	ExcludeRegex []string `json:"excludeRegex"`
	IncludeRegex []string `json:"includeRegex"`
}
