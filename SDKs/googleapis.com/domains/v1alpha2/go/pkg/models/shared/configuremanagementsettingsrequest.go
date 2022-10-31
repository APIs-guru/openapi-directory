package shared



type ConfigureManagementSettingsRequest struct {
    ManagementSettings *ManagementSettings `json:"managementSettings,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

