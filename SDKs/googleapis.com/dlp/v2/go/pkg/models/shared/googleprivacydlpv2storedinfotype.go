package shared

// GooglePrivacyDlpV2StoredInfoType
// StoredInfoType resource message that contains information about the current version and any pending updates.
type GooglePrivacyDlpV2StoredInfoType struct {
	CurrentVersion  *GooglePrivacyDlpV2StoredInfoTypeVersion  `json:"currentVersion,omitempty"`
	Name            *string                                   `json:"name,omitempty"`
	PendingVersions []GooglePrivacyDlpV2StoredInfoTypeVersion `json:"pendingVersions,omitempty"`
}
