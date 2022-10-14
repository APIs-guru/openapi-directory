package shared

type AndroidRuntimeConfiguration struct {
	Locales      []Locale      `json:"locales,omitempty"`
	Orientations []Orientation `json:"orientations,omitempty"`
}
