package shared

type GooglePrivacyDlpV2CreateStoredInfoTypeRequest struct {
	Config           *GooglePrivacyDlpV2StoredInfoTypeConfig `json:"config"`
	LocationID       *string                                 `json:"locationId"`
	StoredInfoTypeID *string                                 `json:"storedInfoTypeId"`
}
