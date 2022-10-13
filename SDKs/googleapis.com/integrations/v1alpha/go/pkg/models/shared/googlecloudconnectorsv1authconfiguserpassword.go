package shared

type GoogleCloudConnectorsV1AuthConfigUserPassword struct {
	Password *GoogleCloudConnectorsV1Secret `json:"password"`
	Username *string                        `json:"username"`
}
