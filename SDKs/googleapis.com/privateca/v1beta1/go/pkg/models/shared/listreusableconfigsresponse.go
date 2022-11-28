package shared

// ListReusableConfigsResponse
// Response message for CertificateAuthorityService.ListReusableConfigs.
type ListReusableConfigsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	ReusableConfigs []ReusableConfig `json:"reusableConfigs,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
}
