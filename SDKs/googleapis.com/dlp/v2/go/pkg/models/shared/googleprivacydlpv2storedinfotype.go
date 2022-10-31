package shared

type GooglePrivacyDlpV2StoredInfoType struct {
	CurrentVersion  *GooglePrivacyDlpV2StoredInfoTypeVersion  `json:"currentVersion,omitempty"`
	Name            *string                                   `json:"name,omitempty"`
	PendingVersions []GooglePrivacyDlpV2StoredInfoTypeVersion `json:"pendingVersions,omitempty"`
}
