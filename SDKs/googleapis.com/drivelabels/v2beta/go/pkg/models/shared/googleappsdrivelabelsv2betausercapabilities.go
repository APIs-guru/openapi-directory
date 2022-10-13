package shared

type GoogleAppsDriveLabelsV2betaUserCapabilities struct {
	CanAccessLabelManager *bool   `json:"canAccessLabelManager"`
	CanAdministrateLabels *bool   `json:"canAdministrateLabels"`
	CanCreateAdminLabels  *bool   `json:"canCreateAdminLabels"`
	CanCreateSharedLabels *bool   `json:"canCreateSharedLabels"`
	Name                  *string `json:"name"`
}
