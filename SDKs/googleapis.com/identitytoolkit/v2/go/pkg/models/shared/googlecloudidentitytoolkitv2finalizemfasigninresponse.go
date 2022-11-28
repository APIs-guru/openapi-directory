package shared

// GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
// FinalizeMfaSignIn response.
type GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse struct {
	IDToken       *string                                                   `json:"idToken,omitempty"`
	PhoneAuthInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo `json:"phoneAuthInfo,omitempty"`
	RefreshToken  *string                                                   `json:"refreshToken,omitempty"`
}
