package shared

type ServiceAccountDelegationInfo struct {
	PrincipalEmail   *string `json:"principalEmail,omitempty"`
	PrincipalSubject *string `json:"principalSubject,omitempty"`
}
