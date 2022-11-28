package shared

// GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
// Response for ListOAuthIdpConfigs
type GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse struct {
	NextPageToken   *string                                           `json:"nextPageToken,omitempty"`
	OauthIdpConfigs []GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig `json:"oauthIdpConfigs,omitempty"`
}
