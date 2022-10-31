package shared

type GooglePrivacyDlpV2Error struct {
	Details    *GoogleRPCStatus `json:"details,omitempty"`
	Timestamps []string         `json:"timestamps,omitempty"`
}
