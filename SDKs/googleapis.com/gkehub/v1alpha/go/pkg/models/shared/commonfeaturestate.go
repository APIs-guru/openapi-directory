package shared

type CommonFeatureState struct {
	Appdevexperience *AppDevExperienceFeatureState `json:"appdevexperience,omitempty"`
	Servicemesh      *ServiceMeshFeatureState      `json:"servicemesh,omitempty"`
	State            *FeatureState                 `json:"state,omitempty"`
}
