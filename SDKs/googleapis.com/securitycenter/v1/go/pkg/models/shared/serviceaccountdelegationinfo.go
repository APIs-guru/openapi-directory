package shared

type ServiceAccountDelegationInfo struct {
	PrincipalEmail   *string `json:"principalEmail"`
	PrincipalSubject *string `json:"principalSubject"`
}
