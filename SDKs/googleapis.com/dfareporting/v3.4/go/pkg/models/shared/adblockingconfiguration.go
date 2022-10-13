package shared

type AdBlockingConfiguration struct {
	ClickThroughURL         *string `json:"clickThroughUrl"`
	CreativeBundleID        *string `json:"creativeBundleId"`
	Enabled                 *bool   `json:"enabled"`
	OverrideClickThroughURL *bool   `json:"overrideClickThroughUrl"`
}
