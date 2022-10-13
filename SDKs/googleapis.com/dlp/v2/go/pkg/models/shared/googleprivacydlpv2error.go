package shared

type GooglePrivacyDlpV2Error struct {
	Details    *GoogleRPCStatus `json:"details"`
	Timestamps []string         `json:"timestamps"`
}
