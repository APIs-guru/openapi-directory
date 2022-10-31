package shared

type MembershipFeatureSpec struct {
	Anthosobservability *AnthosObservabilityMembershipSpec `json:"anthosobservability,omitempty"`
	Anthosvm            *AnthosVMMembershipSpec            `json:"anthosvm,omitempty"`
	Cloudbuild          *CloudBuildMembershipSpec          `json:"cloudbuild,omitempty"`
	Configmanagement    *ConfigManagementMembershipSpec    `json:"configmanagement,omitempty"`
	Identityservice     *IdentityServiceMembershipSpec     `json:"identityservice,omitempty"`
	Mesh                *ServiceMeshMembershipSpec         `json:"mesh,omitempty"`
	Policycontroller    *PolicyControllerMembershipSpec    `json:"policycontroller,omitempty"`
	Workloadcertificate *MembershipSpec                    `json:"workloadcertificate,omitempty"`
}
