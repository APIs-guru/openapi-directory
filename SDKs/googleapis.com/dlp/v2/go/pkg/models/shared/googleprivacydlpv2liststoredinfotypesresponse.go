package shared

// GooglePrivacyDlpV2ListStoredInfoTypesResponse
// Response message for ListStoredInfoTypes.
type GooglePrivacyDlpV2ListStoredInfoTypesResponse struct {
	NextPageToken   *string                            `json:"nextPageToken,omitempty"`
	StoredInfoTypes []GooglePrivacyDlpV2StoredInfoType `json:"storedInfoTypes,omitempty"`
}
