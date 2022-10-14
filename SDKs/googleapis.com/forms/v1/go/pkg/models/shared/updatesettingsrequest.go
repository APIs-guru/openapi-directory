package shared

type UpdateSettingsRequest struct {
	Settings   *FormSettings `json:"settings,omitempty"`
	UpdateMask *string       `json:"updateMask,omitempty"`
}
