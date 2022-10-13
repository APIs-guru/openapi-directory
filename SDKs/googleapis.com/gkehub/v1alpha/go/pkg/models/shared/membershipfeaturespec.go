package shared

type MembershipFeatureSpec struct {
	Anthosobservability *AnthosObservabilityMembershipSpec `json:"anthosobservability"`
	Anthosvm            *AnthosVMMembershipSpec            `json:"anthosvm"`
	Cloudbuild          *CloudBuildMembershipSpec          `json:"cloudbuild"`
	Configmanagement    *ConfigManagementMembershipSpec    `json:"configmanagement"`
	Identityservice     *IdentityServiceMembershipSpec     `json:"identityservice"`
	Mesh                *ServiceMeshMembershipSpec         `json:"mesh"`
	Policycontroller    *PolicyControllerMembershipSpec    `json:"policycontroller"`
	Workloadcertificate *MembershipSpec                    `json:"workloadcertificate"`
}
