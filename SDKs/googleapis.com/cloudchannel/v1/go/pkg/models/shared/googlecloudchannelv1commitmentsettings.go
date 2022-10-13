package shared

type GoogleCloudChannelV1CommitmentSettings struct {
	EndTime         *string                              `json:"endTime"`
	RenewalSettings *GoogleCloudChannelV1RenewalSettings `json:"renewalSettings"`
	StartTime       *string                              `json:"startTime"`
}
