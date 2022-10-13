package shared

type CloudFunctionInfo struct {
	DisplayName *string `json:"displayName"`
	Location    *string `json:"location"`
	URI         *string `json:"uri"`
	VersionID   *string `json:"versionId"`
}
