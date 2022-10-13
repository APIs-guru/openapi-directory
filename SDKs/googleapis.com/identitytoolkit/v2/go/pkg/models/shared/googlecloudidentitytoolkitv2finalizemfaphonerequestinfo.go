package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo struct {
	AndroidVerificationProof *string `json:"androidVerificationProof"`
	Code                     *string `json:"code"`
	PhoneNumber              *string `json:"phoneNumber"`
	SessionInfo              *string `json:"sessionInfo"`
}
