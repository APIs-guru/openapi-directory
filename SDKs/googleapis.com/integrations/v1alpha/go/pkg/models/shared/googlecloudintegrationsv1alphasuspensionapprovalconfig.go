package shared

type GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig struct {
	CustomMessage  *string                                                     `json:"customMessage"`
	EmailAddresses []string                                                    `json:"emailAddresses"`
	Expiration     *GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration `json:"expiration"`
}
