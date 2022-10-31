package shared

type MembershipFeatureSpec struct {
	Anthosvm         *AnthosVMMembershipSpec         `json:"anthosvm,omitempty"`
	Configmanagement *ConfigManagementMembershipSpec `json:"configmanagement,omitempty"`
	Identityservice  *IdentityServiceMembershipSpec  `json:"identityservice,omitempty"`
	Mesh             *ServiceMeshMembershipSpec      `json:"mesh,omitempty"`
}
