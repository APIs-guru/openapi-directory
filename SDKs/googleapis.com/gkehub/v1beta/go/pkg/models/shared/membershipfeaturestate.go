package shared

// MembershipFeatureState
// MembershipFeatureState contains Feature status information for a single Membership.
type MembershipFeatureState struct {
	Appdevexperience   *AppDevExperienceFeatureState    `json:"appdevexperience,omitempty"`
	Configmanagement   *ConfigManagementMembershipState `json:"configmanagement,omitempty"`
	Fleetobservability map[string]interface{}           `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipState  `json:"identityservice,omitempty"`
	Metering           *MeteringMembershipState         `json:"metering,omitempty"`
	Policycontroller   *PolicyControllerMembershipState `json:"policycontroller,omitempty"`
	Servicemesh        *ServiceMeshMembershipState      `json:"servicemesh,omitempty"`
	State              *FeatureState                    `json:"state,omitempty"`
}
