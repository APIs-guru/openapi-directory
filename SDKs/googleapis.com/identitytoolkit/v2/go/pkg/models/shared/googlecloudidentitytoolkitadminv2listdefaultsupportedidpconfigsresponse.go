package shared

// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
// Response for DefaultSupportedIdpConfigs
type GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse struct {
	DefaultSupportedIdpConfigs []GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig `json:"defaultSupportedIdpConfigs,omitempty"`
	NextPageToken              *string                                                      `json:"nextPageToken,omitempty"`
}
