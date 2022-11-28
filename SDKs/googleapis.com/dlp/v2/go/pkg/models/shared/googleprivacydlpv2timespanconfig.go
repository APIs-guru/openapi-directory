package shared

// GooglePrivacyDlpV2TimespanConfig
// Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
type GooglePrivacyDlpV2TimespanConfig struct {
	EnableAutoPopulationOfTimespanConfig *bool                      `json:"enableAutoPopulationOfTimespanConfig,omitempty"`
	EndTime                              *string                    `json:"endTime,omitempty"`
	StartTime                            *string                    `json:"startTime,omitempty"`
	TimestampField                       *GooglePrivacyDlpV2FieldID `json:"timestampField,omitempty"`
}
