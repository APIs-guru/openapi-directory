package shared

// SetupTag
// Represents a reference to atag that fires before another tag in order to set up dependencies.
type SetupTag struct {
	StopOnSetupFailure *bool   `json:"stopOnSetupFailure,omitempty"`
	TagName            *string `json:"tagName,omitempty"`
}
