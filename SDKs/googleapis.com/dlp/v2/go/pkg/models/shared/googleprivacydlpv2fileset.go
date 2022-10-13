package shared

type GooglePrivacyDlpV2FileSet struct {
	RegexFileSet *GooglePrivacyDlpV2CloudStorageRegexFileSet `json:"regexFileSet"`
	URL          *string                                     `json:"url"`
}
