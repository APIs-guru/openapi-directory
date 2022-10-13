package shared

type GooglePrivacyDlpV2Table struct {
	Headers []GooglePrivacyDlpV2FieldID `json:"headers"`
	Rows    []GooglePrivacyDlpV2Row     `json:"rows"`
}
