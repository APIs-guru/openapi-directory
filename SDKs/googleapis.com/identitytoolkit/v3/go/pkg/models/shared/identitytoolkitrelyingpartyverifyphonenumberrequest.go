package shared



type IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest struct {
    Code *string `json:"code,omitempty"`
    IDToken *string `json:"idToken,omitempty"`
    Operation *string `json:"operation,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    SessionInfo *string `json:"sessionInfo,omitempty"`
    TemporaryProof *string `json:"temporaryProof,omitempty"`
    VerificationProof *string `json:"verificationProof,omitempty"`
    
}

