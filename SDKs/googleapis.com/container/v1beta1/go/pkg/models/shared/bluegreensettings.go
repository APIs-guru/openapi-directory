package shared

// BlueGreenSettings
// Settings for blue-green upgrade.
type BlueGreenSettings struct {
	NodePoolSoakDuration  *string                `json:"nodePoolSoakDuration,omitempty"`
	StandardRolloutPolicy *StandardRolloutPolicy `json:"standardRolloutPolicy,omitempty"`
}
