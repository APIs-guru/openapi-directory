package shared

// AndroidRuntimeConfiguration
// Android configuration that can be selected at the time a test is run.
type AndroidRuntimeConfiguration struct {
	Locales      []Locale      `json:"locales,omitempty"`
	Orientations []Orientation `json:"orientations,omitempty"`
}
