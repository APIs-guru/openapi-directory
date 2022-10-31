package shared

type GoogleAppsDriveLabelsV2betaUserCapabilities struct {
	CanAccessLabelManager *bool   `json:"canAccessLabelManager,omitempty"`
	CanAdministrateLabels *bool   `json:"canAdministrateLabels,omitempty"`
	CanCreateAdminLabels  *bool   `json:"canCreateAdminLabels,omitempty"`
	CanCreateSharedLabels *bool   `json:"canCreateSharedLabels,omitempty"`
	Name                  *string `json:"name,omitempty"`
}
