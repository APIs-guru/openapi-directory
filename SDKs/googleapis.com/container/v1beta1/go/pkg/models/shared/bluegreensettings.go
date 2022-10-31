package shared

type BlueGreenSettings struct {
	NodePoolSoakDuration  *string                `json:"nodePoolSoakDuration,omitempty"`
	StandardRolloutPolicy *StandardRolloutPolicy `json:"standardRolloutPolicy,omitempty"`
}
