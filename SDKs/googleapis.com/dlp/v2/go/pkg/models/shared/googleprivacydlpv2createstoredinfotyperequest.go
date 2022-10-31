package shared

type GooglePrivacyDlpV2CreateStoredInfoTypeRequest struct {
	Config           *GooglePrivacyDlpV2StoredInfoTypeConfig `json:"config,omitempty"`
	LocationID       *string                                 `json:"locationId,omitempty"`
	StoredInfoTypeID *string                                 `json:"storedInfoTypeId,omitempty"`
}
