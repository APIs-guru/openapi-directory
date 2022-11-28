package shared

// GoogleCloudChannelV1ChangeRenewalSettingsRequest
// Request message for CloudChannelService.ChangeRenewalSettings.
type GoogleCloudChannelV1ChangeRenewalSettingsRequest struct {
	RenewalSettings *GoogleCloudChannelV1RenewalSettings `json:"renewalSettings,omitempty"`
	RequestID       *string                              `json:"requestId,omitempty"`
}
