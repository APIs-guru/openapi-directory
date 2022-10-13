package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo struct {
	AndroidVerificationProof           *string `json:"androidVerificationProof"`
	AndroidVerificationProofExpireTime *string `json:"androidVerificationProofExpireTime"`
	PhoneNumber                        *string `json:"phoneNumber"`
}
