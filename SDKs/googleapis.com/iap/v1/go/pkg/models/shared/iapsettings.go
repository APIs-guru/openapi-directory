package shared

// IapSettings
// The IAP configurable settings.
type IapSettings struct {
	AccessSettings      *AccessSettings      `json:"accessSettings,omitempty"`
	ApplicationSettings *ApplicationSettings `json:"applicationSettings,omitempty"`
	Name                *string              `json:"name,omitempty"`
}
