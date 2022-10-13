package shared

type GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse struct {
	DefaultSupportedIdpConfigs []GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig `json:"defaultSupportedIdpConfigs"`
	NextPageToken              *string                                                      `json:"nextPageToken"`
}
