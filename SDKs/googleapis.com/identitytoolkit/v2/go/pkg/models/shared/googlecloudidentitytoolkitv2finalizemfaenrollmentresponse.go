package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse struct {
	IDToken       *string                                                   `json:"idToken"`
	PhoneAuthInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo `json:"phoneAuthInfo"`
	RefreshToken  *string                                                   `json:"refreshToken"`
}
