package shared

type FailoverContext struct {
	Kind            *string `json:"kind"`
	SettingsVersion *string `json:"settingsVersion"`
}
