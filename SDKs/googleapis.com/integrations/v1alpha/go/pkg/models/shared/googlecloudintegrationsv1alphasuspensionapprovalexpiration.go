package shared

// GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput
// Expiration configs for the approval request.
type GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput struct {
	LiftWhenExpired *bool   `json:"liftWhenExpired,omitempty"`
	RemindTime      *string `json:"remindTime,omitempty"`
}

// GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration
// Expiration configs for the approval request.
type GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration struct {
	ExpireTime      *string `json:"expireTime,omitempty"`
	LiftWhenExpired *bool   `json:"liftWhenExpired,omitempty"`
	RemindTime      *string `json:"remindTime,omitempty"`
}
