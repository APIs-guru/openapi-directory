package shared

// ReusableConfigWrapper
// A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
type ReusableConfigWrapper struct {
	ReusableConfig       *string               `json:"reusableConfig,omitempty"`
	ReusableConfigValues *ReusableConfigValues `json:"reusableConfigValues,omitempty"`
}
