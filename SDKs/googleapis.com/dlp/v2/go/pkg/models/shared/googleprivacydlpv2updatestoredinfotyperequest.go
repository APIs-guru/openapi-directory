package shared

type GooglePrivacyDlpV2UpdateStoredInfoTypeRequest struct {
	Config     *GooglePrivacyDlpV2StoredInfoTypeConfig `json:"config,omitempty"`
	UpdateMask *string                                 `json:"updateMask,omitempty"`
}
