package shared



type GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig struct {
    CustomMessage *string `json:"customMessage,omitempty"`
    EmailAddresses []string `json:"emailAddresses,omitempty"`
    Expiration *GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration `json:"expiration,omitempty"`
    
}

