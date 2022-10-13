package shared

type IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest struct {
	Code              *string `json:"code"`
	IDToken           *string `json:"idToken"`
	Operation         *string `json:"operation"`
	PhoneNumber       *string `json:"phoneNumber"`
	SessionInfo       *string `json:"sessionInfo"`
	TemporaryProof    *string `json:"temporaryProof"`
	VerificationProof *string `json:"verificationProof"`
}
