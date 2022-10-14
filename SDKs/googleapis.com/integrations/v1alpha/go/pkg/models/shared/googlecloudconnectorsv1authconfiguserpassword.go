package shared

type GoogleCloudConnectorsV1AuthConfigUserPassword struct {
	Password *GoogleCloudConnectorsV1Secret `json:"password,omitempty"`
	Username *string                        `json:"username,omitempty"`
}
