package shared

type GooglePrivacyDlpV2StoredInfoType struct {
	CurrentVersion  *GooglePrivacyDlpV2StoredInfoTypeVersion  `json:"currentVersion"`
	Name            *string                                   `json:"name"`
	PendingVersions []GooglePrivacyDlpV2StoredInfoTypeVersion `json:"pendingVersions"`
}
