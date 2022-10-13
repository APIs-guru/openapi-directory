package shared

type MembershipFeatureState struct {
	Anthosvm         *AnthosVMMembershipState         `json:"anthosvm"`
	Appdevexperience *AppDevExperienceFeatureState    `json:"appdevexperience"`
	Configmanagement *ConfigManagementMembershipState `json:"configmanagement"`
	Identityservice  *IdentityServiceMembershipState  `json:"identityservice"`
	Servicemesh      *ServiceMeshMembershipState      `json:"servicemesh"`
	State            *FeatureState                    `json:"state"`
}
