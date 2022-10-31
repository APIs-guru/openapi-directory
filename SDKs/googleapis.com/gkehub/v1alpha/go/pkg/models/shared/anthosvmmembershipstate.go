package shared

type AnthosVMMembershipState struct {
	LocalControllerState *LocalControllerState     `json:"localControllerState,omitempty"`
	SubfeatureState      []AnthosVMSubFeatureState `json:"subfeatureState,omitempty"`
}
