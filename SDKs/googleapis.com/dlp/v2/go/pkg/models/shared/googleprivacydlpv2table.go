package shared

// GooglePrivacyDlpV2Table
// Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
type GooglePrivacyDlpV2Table struct {
	Headers []GooglePrivacyDlpV2FieldID `json:"headers,omitempty"`
	Rows    []GooglePrivacyDlpV2Row     `json:"rows,omitempty"`
}
