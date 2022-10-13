package shared

type GoogleCloudChannelV1ChangeRenewalSettingsRequest struct {
	RenewalSettings *GoogleCloudChannelV1RenewalSettings `json:"renewalSettings"`
	RequestID       *string                              `json:"requestId"`
}
