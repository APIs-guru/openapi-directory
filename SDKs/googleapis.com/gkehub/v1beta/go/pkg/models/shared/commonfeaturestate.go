package shared



type CommonFeatureState struct {
    Appdevexperience *AppDevExperienceFeatureState `json:"appdevexperience,omitempty"`
    State *FeatureState `json:"state,omitempty"`
    
}

