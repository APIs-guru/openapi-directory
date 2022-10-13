package shared

type IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse struct {
	ExpiresIn                  *string `json:"expiresIn"`
	IDToken                    *string `json:"idToken"`
	IsNewUser                  *bool   `json:"isNewUser"`
	LocalID                    *string `json:"localId"`
	PhoneNumber                *string `json:"phoneNumber"`
	RefreshToken               *string `json:"refreshToken"`
	TemporaryProof             *string `json:"temporaryProof"`
	TemporaryProofExpiresIn    *string `json:"temporaryProofExpiresIn"`
	VerificationProof          *string `json:"verificationProof"`
	VerificationProofExpiresIn *string `json:"verificationProofExpiresIn"`
}
