package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo struct {
	AndroidVerificationProof           *string `json:"androidVerificationProof,omitempty"`
	AndroidVerificationProofExpireTime *string `json:"androidVerificationProofExpireTime,omitempty"`
	PhoneNumber                        *string `json:"phoneNumber,omitempty"`
}
