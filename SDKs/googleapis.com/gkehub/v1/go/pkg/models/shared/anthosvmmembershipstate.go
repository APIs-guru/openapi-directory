package shared

type AnthosVMMembershipState struct {
	LocalControllerState *LocalControllerState     `json:"localControllerState"`
	SubfeatureState      []AnthosVMSubFeatureState `json:"subfeatureState"`
}
