package shared

type IdentityServiceMembershipStateStateEnum string

const (
	IdentityServiceMembershipStateStateEnumDeploymentStateUnspecified IdentityServiceMembershipStateStateEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	IdentityServiceMembershipStateStateEnumOk                         IdentityServiceMembershipStateStateEnum = "OK"
	IdentityServiceMembershipStateStateEnumError                      IdentityServiceMembershipStateStateEnum = "ERROR"
)

type IdentityServiceMembershipState struct {
	FailureReason    *string                                  `json:"failureReason,omitempty"`
	InstalledVersion *string                                  `json:"installedVersion,omitempty"`
	MemberConfig     *IdentityServiceMembershipSpec           `json:"memberConfig,omitempty"`
	State            *IdentityServiceMembershipStateStateEnum `json:"state,omitempty"`
}
