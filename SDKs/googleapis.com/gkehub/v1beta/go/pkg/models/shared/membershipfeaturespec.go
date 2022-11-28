package shared

// MembershipFeatureSpec
// MembershipFeatureSpec contains configuration information for a single Membership.
type MembershipFeatureSpec struct {
	Anthosobservability *AnthosObservabilityMembershipSpec `json:"anthosobservability,omitempty"`
	Cloudbuild          *MembershipSpec                    `json:"cloudbuild,omitempty"`
	Configmanagement    *ConfigManagementMembershipSpec    `json:"configmanagement,omitempty"`
	Fleetobservability  map[string]interface{}             `json:"fleetobservability,omitempty"`
	Identityservice     *IdentityServiceMembershipSpec     `json:"identityservice,omitempty"`
	Mesh                *ServiceMeshMembershipSpec         `json:"mesh,omitempty"`
	Policycontroller    *PolicyControllerMembershipSpec    `json:"policycontroller,omitempty"`
}

// MembershipFeatureSpecInput
// MembershipFeatureSpec contains configuration information for a single Membership.
type MembershipFeatureSpecInput struct {
	Anthosobservability *AnthosObservabilityMembershipSpec  `json:"anthosobservability,omitempty"`
	Cloudbuild          *MembershipSpec                     `json:"cloudbuild,omitempty"`
	Configmanagement    *ConfigManagementMembershipSpec     `json:"configmanagement,omitempty"`
	Fleetobservability  map[string]interface{}              `json:"fleetobservability,omitempty"`
	Identityservice     *IdentityServiceMembershipSpecInput `json:"identityservice,omitempty"`
	Mesh                *ServiceMeshMembershipSpec          `json:"mesh,omitempty"`
	Policycontroller    *PolicyControllerMembershipSpec     `json:"policycontroller,omitempty"`
}
