package shared



type GooglePrivacyDlpV2TimespanConfig struct {
    EnableAutoPopulationOfTimespanConfig *bool `json:"enableAutoPopulationOfTimespanConfig,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    TimestampField *GooglePrivacyDlpV2FieldID `json:"timestampField,omitempty"`
    
}

