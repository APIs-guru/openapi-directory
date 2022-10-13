package shared

type MembershipFeatureSpec struct {
	Anthosobservability *AnthosObservabilityMembershipSpec `json:"anthosobservability"`
	Anthosvm            *AnthosVMMembershipSpec            `json:"anthosvm"`
	Cloudbuild          *MembershipSpec                    `json:"cloudbuild"`
	Configmanagement    *ConfigManagementMembershipSpec    `json:"configmanagement"`
	Identityservice     *IdentityServiceMembershipSpec     `json:"identityservice"`
	Mesh                *ServiceMeshMembershipSpec         `json:"mesh"`
	Policycontroller    *PolicyControllerMembershipSpec    `json:"policycontroller"`
}
