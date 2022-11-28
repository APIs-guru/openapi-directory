package shared

// GoogleCloudConnectorsV1AuthConfigUserPassword
// Parameters to support Username and Password Authentication.
type GoogleCloudConnectorsV1AuthConfigUserPassword struct {
	Password *GoogleCloudConnectorsV1Secret `json:"password,omitempty"`
	Username *string                        `json:"username,omitempty"`
}
