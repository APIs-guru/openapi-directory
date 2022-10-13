package shared

type IdentityServiceMembershipStateStateEnum string

const (
	IdentityServiceMembershipStateStateEnumDeploymentStateUnspecified IdentityServiceMembershipStateStateEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	IdentityServiceMembershipStateStateEnumOk                         IdentityServiceMembershipStateStateEnum = "OK"
	IdentityServiceMembershipStateStateEnumError                      IdentityServiceMembershipStateStateEnum = "ERROR"
)

type IdentityServiceMembershipState struct {
	FailureReason    *string                                  `json:"failureReason"`
	InstalledVersion *string                                  `json:"installedVersion"`
	MemberConfig     *IdentityServiceMembershipSpec           `json:"memberConfig"`
	State            *IdentityServiceMembershipStateStateEnum `json:"state"`
}
