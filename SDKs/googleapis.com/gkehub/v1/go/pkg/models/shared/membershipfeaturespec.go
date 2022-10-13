package shared

type MembershipFeatureSpec struct {
	Anthosvm         *AnthosVMMembershipSpec         `json:"anthosvm"`
	Configmanagement *ConfigManagementMembershipSpec `json:"configmanagement"`
	Identityservice  *IdentityServiceMembershipSpec  `json:"identityservice"`
	Mesh             *ServiceMeshMembershipSpec      `json:"mesh"`
}
