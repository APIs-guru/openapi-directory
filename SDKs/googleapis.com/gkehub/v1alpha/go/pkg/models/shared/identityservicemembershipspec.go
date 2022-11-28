package shared

// IdentityServiceMembershipSpecInput
// **Anthos Identity Service**: Configuration for a single Membership.
type IdentityServiceMembershipSpecInput struct {
	AuthMethods []IdentityServiceAuthMethodInput `json:"authMethods,omitempty"`
}

// IdentityServiceMembershipSpec
// **Anthos Identity Service**: Configuration for a single Membership.
type IdentityServiceMembershipSpec struct {
	AuthMethods []IdentityServiceAuthMethod `json:"authMethods,omitempty"`
}
