package shared

// CommonFeatureState
// CommonFeatureState contains Hub-wide Feature status information.
type CommonFeatureState struct {
	Appdevexperience   *AppDevExperienceFeatureState `json:"appdevexperience,omitempty"`
	Fleetobservability map[string]interface{}        `json:"fleetobservability,omitempty"`
	State              *FeatureState                 `json:"state,omitempty"`
}
