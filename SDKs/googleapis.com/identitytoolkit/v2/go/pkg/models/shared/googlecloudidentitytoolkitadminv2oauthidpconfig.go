package shared

type GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig struct {
	ClientID     *string                                             `json:"clientId"`
	ClientSecret *string                                             `json:"clientSecret"`
	DisplayName  *string                                             `json:"displayName"`
	Enabled      *bool                                               `json:"enabled"`
	Issuer       *string                                             `json:"issuer"`
	Name         *string                                             `json:"name"`
	ResponseType *GoogleCloudIdentitytoolkitAdminV2OAuthResponseType `json:"responseType"`
}
