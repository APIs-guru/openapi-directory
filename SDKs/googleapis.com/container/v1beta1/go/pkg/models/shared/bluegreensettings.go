package shared

type BlueGreenSettings struct {
	NodePoolSoakDuration  *string                `json:"nodePoolSoakDuration"`
	StandardRolloutPolicy *StandardRolloutPolicy `json:"standardRolloutPolicy"`
}
