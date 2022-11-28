package shared

// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo
// Phone Verification info for a FinalizeMfa request.
type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo struct {
	AndroidVerificationProof *string `json:"androidVerificationProof,omitempty"`
	Code                     *string `json:"code,omitempty"`
	PhoneNumber              *string `json:"phoneNumber,omitempty"`
	SessionInfo              *string `json:"sessionInfo,omitempty"`
}
