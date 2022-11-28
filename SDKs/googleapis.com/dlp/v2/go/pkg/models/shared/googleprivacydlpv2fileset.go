package shared

// GooglePrivacyDlpV2FileSet
// Set of files to scan.
type GooglePrivacyDlpV2FileSet struct {
	RegexFileSet *GooglePrivacyDlpV2CloudStorageRegexFileSet `json:"regexFileSet,omitempty"`
	URL          *string                                     `json:"url,omitempty"`
}
