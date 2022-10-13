package shared

type CommonFeatureState struct {
	Appdevexperience *AppDevExperienceFeatureState `json:"appdevexperience"`
	State            *FeatureState                 `json:"state"`
}
