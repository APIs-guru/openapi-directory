package shared

// ConfigureManagementSettingsRequestInput
// Request for the `ConfigureManagementSettings` method.
type ConfigureManagementSettingsRequestInput struct {
	ManagementSettings *ManagementSettingsInput `json:"managementSettings,omitempty"`
	UpdateMask         *string                  `json:"updateMask,omitempty"`
}
