package shared

// GoogleCloudChannelV1CommitmentSettingsInput
// Commitment settings for commitment-based offers.
type GoogleCloudChannelV1CommitmentSettingsInput struct {
	RenewalSettings *GoogleCloudChannelV1RenewalSettings `json:"renewalSettings,omitempty"`
}

// GoogleCloudChannelV1CommitmentSettings
// Commitment settings for commitment-based offers.
type GoogleCloudChannelV1CommitmentSettings struct {
	EndTime         *string                              `json:"endTime,omitempty"`
	RenewalSettings *GoogleCloudChannelV1RenewalSettings `json:"renewalSettings,omitempty"`
	StartTime       *string                              `json:"startTime,omitempty"`
}
