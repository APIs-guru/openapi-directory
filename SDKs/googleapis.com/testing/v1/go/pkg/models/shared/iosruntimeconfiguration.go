package shared

type IosRuntimeConfiguration struct {
	Locales      []Locale      `json:"locales"`
	Orientations []Orientation `json:"orientations"`
}
