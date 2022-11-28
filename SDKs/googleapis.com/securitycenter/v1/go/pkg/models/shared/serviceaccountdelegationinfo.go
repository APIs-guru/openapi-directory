package shared

// ServiceAccountDelegationInfo
// Identity delegation history of an authenticated service account.
type ServiceAccountDelegationInfo struct {
	PrincipalEmail   *string `json:"principalEmail,omitempty"`
	PrincipalSubject *string `json:"principalSubject,omitempty"`
}
