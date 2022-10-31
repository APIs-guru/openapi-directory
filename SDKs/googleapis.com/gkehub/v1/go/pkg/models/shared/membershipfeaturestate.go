package shared



type MembershipFeatureState struct {
    Anthosvm *AnthosVMMembershipState `json:"anthosvm,omitempty"`
    Appdevexperience *AppDevExperienceFeatureState `json:"appdevexperience,omitempty"`
    Configmanagement *ConfigManagementMembershipState `json:"configmanagement,omitempty"`
    Identityservice *IdentityServiceMembershipState `json:"identityservice,omitempty"`
    Servicemesh *ServiceMeshMembershipState `json:"servicemesh,omitempty"`
    State *FeatureState `json:"state,omitempty"`
    
}

