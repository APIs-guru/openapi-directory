package shared

type MembershipSpecSecurityPolicyEnum string

const (
	MembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified MembershipSpecSecurityPolicyEnum = "SECURITY_POLICY_UNSPECIFIED"
	MembershipSpecSecurityPolicyEnumNonPrivileged             MembershipSpecSecurityPolicyEnum = "NON_PRIVILEGED"
	MembershipSpecSecurityPolicyEnumPrivileged                MembershipSpecSecurityPolicyEnum = "PRIVILEGED"
)

type MembershipSpec struct {
	SecurityPolicy *MembershipSpecSecurityPolicyEnum `json:"securityPolicy,omitempty"`
	Version        *string                           `json:"version,omitempty"`
}
