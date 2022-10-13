package shared

type SettingsChange struct {
	RestrictionChanges []RestrictionChange `json:"restrictionChanges"`
}
