package shared

type GooglePrivacyDlpV2TimespanConfig struct {
	EnableAutoPopulationOfTimespanConfig *bool                      `json:"enableAutoPopulationOfTimespanConfig"`
	EndTime                              *string                    `json:"endTime"`
	StartTime                            *string                    `json:"startTime"`
	TimestampField                       *GooglePrivacyDlpV2FieldID `json:"timestampField"`
}
