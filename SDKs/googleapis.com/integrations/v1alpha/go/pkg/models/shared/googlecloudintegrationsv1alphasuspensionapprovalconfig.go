package shared

// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput
// Configurations for approving the Suspension.
type GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput struct {
	CustomMessage  *string                                                          `json:"customMessage,omitempty"`
	EmailAddresses []string                                                         `json:"emailAddresses,omitempty"`
	Expiration     *GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput `json:"expiration,omitempty"`
}

// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig
// Configurations for approving the Suspension.
type GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig struct {
	CustomMessage  *string                                                     `json:"customMessage,omitempty"`
	EmailAddresses []string                                                    `json:"emailAddresses,omitempty"`
	Expiration     *GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration `json:"expiration,omitempty"`
}
