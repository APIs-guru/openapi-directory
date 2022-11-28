package shared

// IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
// Response for Identitytoolkit-VerifyPhoneNumber
type IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse struct {
	ExpiresIn                  *string `json:"expiresIn,omitempty"`
	IDToken                    *string `json:"idToken,omitempty"`
	IsNewUser                  *bool   `json:"isNewUser,omitempty"`
	LocalID                    *string `json:"localId,omitempty"`
	PhoneNumber                *string `json:"phoneNumber,omitempty"`
	RefreshToken               *string `json:"refreshToken,omitempty"`
	TemporaryProof             *string `json:"temporaryProof,omitempty"`
	TemporaryProofExpiresIn    *string `json:"temporaryProofExpiresIn,omitempty"`
	VerificationProof          *string `json:"verificationProof,omitempty"`
	VerificationProofExpiresIn *string `json:"verificationProofExpiresIn,omitempty"`
}
