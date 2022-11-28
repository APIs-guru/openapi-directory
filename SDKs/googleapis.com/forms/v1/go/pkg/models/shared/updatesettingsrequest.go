package shared

// UpdateSettingsRequest
// Update Form's FormSettings.
type UpdateSettingsRequest struct {
	Settings   *FormSettings `json:"settings,omitempty"`
	UpdateMask *string       `json:"updateMask,omitempty"`
}
