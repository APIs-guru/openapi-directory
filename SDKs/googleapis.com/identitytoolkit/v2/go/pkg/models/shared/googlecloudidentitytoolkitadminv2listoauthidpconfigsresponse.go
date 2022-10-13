package shared

type GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse struct {
	NextPageToken   *string                                           `json:"nextPageToken"`
	OauthIdpConfigs []GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig `json:"oauthIdpConfigs"`
}
