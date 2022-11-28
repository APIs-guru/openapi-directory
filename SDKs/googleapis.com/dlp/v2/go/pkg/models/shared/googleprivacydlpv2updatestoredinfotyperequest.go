package shared

// GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
// Request message for UpdateStoredInfoType.
type GooglePrivacyDlpV2UpdateStoredInfoTypeRequest struct {
	Config     *GooglePrivacyDlpV2StoredInfoTypeConfig `json:"config,omitempty"`
	UpdateMask *string                                 `json:"updateMask,omitempty"`
}
