package shared

type UpdateSettingsRequest struct {
	Settings   *FormSettings `json:"settings"`
	UpdateMask *string       `json:"updateMask"`
}
