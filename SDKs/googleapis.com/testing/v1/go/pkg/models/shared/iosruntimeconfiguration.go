package shared

// IosRuntimeConfiguration
// iOS configuration that can be selected at the time a test is run.
type IosRuntimeConfiguration struct {
	Locales      []Locale      `json:"locales,omitempty"`
	Orientations []Orientation `json:"orientations,omitempty"`
}
