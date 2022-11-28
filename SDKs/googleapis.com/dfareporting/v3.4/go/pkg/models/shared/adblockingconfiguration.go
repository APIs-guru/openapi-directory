package shared

// AdBlockingConfiguration
// Campaign ad blocking settings.
type AdBlockingConfiguration struct {
	ClickThroughURL         *string `json:"clickThroughUrl,omitempty"`
	CreativeBundleID        *string `json:"creativeBundleId,omitempty"`
	Enabled                 *bool   `json:"enabled,omitempty"`
	OverrideClickThroughURL *bool   `json:"overrideClickThroughUrl,omitempty"`
}
