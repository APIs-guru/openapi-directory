package shared

type CloudBuildMembershipSpecSecurityPolicyEnum string

const (
	CloudBuildMembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified CloudBuildMembershipSpecSecurityPolicyEnum = "SECURITY_POLICY_UNSPECIFIED"
	CloudBuildMembershipSpecSecurityPolicyEnumNonPrivileged             CloudBuildMembershipSpecSecurityPolicyEnum = "NON_PRIVILEGED"
	CloudBuildMembershipSpecSecurityPolicyEnumPrivileged                CloudBuildMembershipSpecSecurityPolicyEnum = "PRIVILEGED"
)

type CloudBuildMembershipSpec struct {
	SecurityPolicy *CloudBuildMembershipSpecSecurityPolicyEnum `json:"securityPolicy,omitempty"`
	Version        *string                                     `json:"version,omitempty"`
}
