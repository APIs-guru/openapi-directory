package shared

// TagSettings
// Dynamic and Image Tag Settings.
type TagSettings struct {
	DynamicTagEnabled *bool `json:"dynamicTagEnabled,omitempty"`
	ImageTagEnabled   *bool `json:"imageTagEnabled,omitempty"`
}
