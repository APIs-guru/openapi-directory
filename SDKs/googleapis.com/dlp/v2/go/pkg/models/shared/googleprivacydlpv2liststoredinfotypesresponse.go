package shared

type GooglePrivacyDlpV2ListStoredInfoTypesResponse struct {
	NextPageToken   *string                            `json:"nextPageToken"`
	StoredInfoTypes []GooglePrivacyDlpV2StoredInfoType `json:"storedInfoTypes"`
}
