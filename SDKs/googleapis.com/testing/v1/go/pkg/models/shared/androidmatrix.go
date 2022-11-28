package shared

// AndroidMatrix
// A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
type AndroidMatrix struct {
	AndroidModelIds   []string `json:"androidModelIds,omitempty"`
	AndroidVersionIds []string `json:"androidVersionIds,omitempty"`
	Locales           []string `json:"locales,omitempty"`
	Orientations      []string `json:"orientations,omitempty"`
}
