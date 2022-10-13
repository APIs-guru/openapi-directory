package shared

type AndroidRuntimeConfiguration struct {
	Locales      []Locale      `json:"locales"`
	Orientations []Orientation `json:"orientations"`
}
