package shared

type CommonFeatureState struct {
	Appdevexperience *AppDevExperienceFeatureState `json:"appdevexperience"`
	Servicemesh      *ServiceMeshFeatureState      `json:"servicemesh"`
	State            *FeatureState                 `json:"state"`
}
