package shared

type MembershipFeatureState struct {
	Anthosvm         *AnthosVMMembershipState         `json:"anthosvm"`
	Appdevexperience *AppDevExperienceFeatureState    `json:"appdevexperience"`
	Configmanagement *ConfigManagementMembershipState `json:"configmanagement"`
	Identityservice  *IdentityServiceMembershipState  `json:"identityservice"`
	Metering         *MeteringMembershipState         `json:"metering"`
	Policycontroller *PolicyControllerMembershipState `json:"policycontroller"`
	Servicemesh      *ServiceMeshMembershipState      `json:"servicemesh"`
	State            *FeatureState                    `json:"state"`
}
