package shared

type GooglePrivacyDlpV2UpdateStoredInfoTypeRequest struct {
	Config     *GooglePrivacyDlpV2StoredInfoTypeConfig `json:"config"`
	UpdateMask *string                                 `json:"updateMask"`
}
