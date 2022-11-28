package shared

// GooglePrivacyDlpV2Error
// Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
type GooglePrivacyDlpV2Error struct {
	Details    *GoogleRPCStatus `json:"details,omitempty"`
	Timestamps []string         `json:"timestamps,omitempty"`
}
