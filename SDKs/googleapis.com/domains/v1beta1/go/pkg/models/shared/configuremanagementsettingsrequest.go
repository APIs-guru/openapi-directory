package shared

type ConfigureManagementSettingsRequest struct {
	ManagementSettings *ManagementSettings `json:"managementSettings"`
	UpdateMask         *string             `json:"updateMask"`
}
