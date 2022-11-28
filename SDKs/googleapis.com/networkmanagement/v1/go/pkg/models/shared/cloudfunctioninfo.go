package shared

// CloudFunctionInfo
// For display only. Metadata associated with a Cloud Function.
type CloudFunctionInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Location    *string `json:"location,omitempty"`
	URI         *string `json:"uri,omitempty"`
	VersionID   *string `json:"versionId,omitempty"`
}
