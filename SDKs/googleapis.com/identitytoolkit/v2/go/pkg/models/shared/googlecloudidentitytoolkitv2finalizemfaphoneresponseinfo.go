package shared

// GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo
// Phone Verification info for a FinalizeMfa response.
type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo struct {
	AndroidVerificationProof           *string `json:"androidVerificationProof,omitempty"`
	AndroidVerificationProofExpireTime *string `json:"androidVerificationProofExpireTime,omitempty"`
	PhoneNumber                        *string `json:"phoneNumber,omitempty"`
}
