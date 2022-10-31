package shared



type GooglePrivacyDlpV2AuxiliaryTable struct {
    QuasiIds []GooglePrivacyDlpV2QuasiIDField `json:"quasiIds,omitempty"`
    RelativeFrequency *GooglePrivacyDlpV2FieldID `json:"relativeFrequency,omitempty"`
    Table *GooglePrivacyDlpV2BigQueryTable `json:"table,omitempty"`
    
}

